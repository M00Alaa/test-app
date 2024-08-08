import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Icon, latLng, marker, tileLayer } from 'leaflet';
import { LocationIQProvider } from 'leaflet-geosearch';
import { SearchResult } from 'leaflet-geosearch/dist/providers/provider';
import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'mg-map-selector',
  standalone: true,
  imports: [CommonModule, LeafletModule, FormsModule, NzAutocompleteModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './map-selector.component.html',
  styleUrls: ['./map-selector.component.scss']
})
export class MapSelectorComponent {
  @Input() disabled = false;
  @Input()
  public set default(v: { lat: string | number | null | undefined, lng: string | number | null | undefined }) {
    
    if (v.lat !== null && v.lng !== null && v.lat !== '' && v.lng !== '' && v.lat !== undefined && v.lng !== undefined) {
      this.selectedLocation = {
        lat: +v.lat,
        lng: +v.lng,
      }
      this.setLatLng(+v.lat!, +v.lng!, 13)
    } else {
      this.setLatLng(this.selectedLocation?.lat!, this.selectedLocation?.lng!, 13)
    }
  }
  ;
  selectedLocation = { lat: 24.6, lng: 46.7 };
  @Output() changed = new EventEmitter<{ lat: number, lng: number }>();
  map: L.Map | undefined;
  options: L.MapOptions = {
    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Eshaam' })],
    zoom: 8,
    markerZoomAnimation: true,
    minZoom: 3,
    center: latLng(this.selectedLocation?.lat, this.selectedLocation.lng), // Initial map center
  };
  constructor(
    private cd: ChangeDetectorRef
  ) {

  }

  layers: any[] = [];
  customMarker
  onMapReady(map: any) {
    setTimeout(() => {
      this.map = map;
      // Create a marker that will capture the selected location
      const defaultLatLng = latLng(this.selectedLocation?.lat, this.selectedLocation.lng); // Default location
      this.selectedLocation = defaultLatLng;
      const customIcon = new Icon({
        iconUrl: '/assets/images/map-pin.svg', // Replace with your custom icon's path
        iconSize: [32, 32], // Set the size of your custom icon (width, height)
        iconAnchor: [16, 32], // Set the anchor point of your custom icon (x, y)
      });
      this.customMarker = marker(defaultLatLng, {
        draggable: this.disabled ? false : true,
        icon: customIcon
      });

      this.customMarker.on('dragend', (event) => {
        this.selectedLocation = event.target.getLatLng();
        this.changed.emit(this.selectedLocation);
        this.cd.detectChanges();
      });
      if (this.selectedLocation.lat !== undefined && this.selectedLocation.lng !== undefined) {
        this.setLatLng(this.selectedLocation.lat!, this.selectedLocation.lng!, 13)
      }
      // Handle map click events
      map.on('click', (event) => {
        // Move the marker to the clicked location
        if(this.disabled){
          return;
        }
        this.customMarker.setLatLng(event.latlng);
        this.selectedLocation = event.latlng;
        this.changed.emit(this.selectedLocation);
        this.cd.detectChanges();
      });
      this.layers = [this.customMarker];

      this.setSearchForm();
    }, 10);
  }



  searching = false;
  setSearchForm() {
    this.searchForm.controls["searchedLocation"].valueChanges
    .pipe(
      debounceTime(600),
      distinctUntilChanged((curr, prev) => {        
        return  curr === prev || false;
      }),
      switchMap(text => {
        if(text){
          this.searching = true;
          this.search(text || '');
        }
        return of(text || '')
      })
    )
    .subscribe(res => {
      
    });
  }

  

  setLatLng(lat: number, lng: number, zoom?: number) {
    if (this.customMarker && this.map) {
      // Create a new LatLng object with the specified latitude and longitude
      const newLatLng = latLng(lat, lng);

      // Set the marker's position to the new LatLng
      this.customMarker.setLatLng(newLatLng);

      // Update the selected location
      this.selectedLocation = newLatLng;

      // Emit the changed event if needed
      this.changed.emit(this.selectedLocation);


      if (zoom) {
        // Set the map's view to the new marker position with the specified zoom
        this.map.setView(newLatLng, zoom, {
          animate: true
        });
      } else {
        // If no zoom is specified, just pan the map to the new marker position
        this.map.panTo(newLatLng);
      }
      
    }
  }


  searchForm = new FormGroup({
    searchedLocation: new FormControl('', Validators.required)
  })
   
  suggestions: SearchResult<any>[] = [];

  compareWith(item1: any, item2: any): boolean {
    return item1 && item2 && item1.label === item2.label;
  }
   provider = new LocationIQProvider({
    params: {
      'accept-language': 'ar',
      key: 'pk.481482a19b880089d19e9e1e7f9f4577',
    },
  });
  search(word: string) {
    // search
    if(word && typeof word === 'string'){
      const results = this.provider.search({ query: word });
  
      results.then(res => {
        this.suggestions = res;
        this.searching = false;
        this.cd.detectChanges();
      });
    }else{
      this.searching = false;
    }
  }
  selectLocation(selected: NzAutocompleteOptionComponent) {
   
      if (selected.nzValue?.x && selected.nzValue?.y && selected.nzValue?.label) {
        this.setLatLng(selected.nzValue.y, selected.nzValue.x,16);  
        this.searchForm.controls.searchedLocation.patchValue(selected.nzValue?.label, {emitEvent: false, onlySelf: true});
      }
 
   

  }

}
