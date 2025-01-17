import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  URL = 'assets/dashboard.json';

  constructor(private http: HttpClient) { }
  getConfig() : Observable<any> {
    return this.http.get<any>(`${this.URL}`)
  }
}
