import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SimplebarAngularComponent } from 'simplebar-angular';
import { AuthenticationService, MgApplicationUser } from 'src/app/core/services/auth.service';
import { SignalRService } from 'src/app/core/services/signal-r.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sahely-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit , AfterViewInit{
  @ViewChild('simplebar') simplebar: SimplebarAngularComponent;
  domain = environment.api;
  now = new Date();
  notifs: any[] = [];
  $total = 0;
  $page = 1;
  $pageSize = 10;
  acc: MgApplicationUser | null;
  scrollbarOptions = {
    autoHide: true,
    direction: 'rtl',
  };
  constructor(
    private signalRService: SignalRService,
    private authService: AuthenticationService,
    private router: Router,
    // private notifsService: NotificationService
    ) {
    // signalRService.startConnection();
    // signalRService.addNotificationsListener((res) => {
    //   this.unreadCount++;
    //   this.notifs.unshift(res);
    //   setTimeout(() => {
    //     this.bell.play();
    //   }, 300);
    // });


  }

  ngAfterViewInit() {
   setTimeout(() => {
    // this.simplebar.SimpleBar.getScrollElement().scroll = (event) => this.handleScroll(event);;
    this.simplebar.SimpleBar.getScrollElement().onscroll = (event) => this.handleScroll(event);
    // this.simplebar.SimpleBar.getScrollElement().onScroll = (event) => this.handleScroll(event);;
   }, 10);
  }

   handleScroll(event) {
    const simplebarElement = this.simplebar.SimpleBar.getScrollElement();    // Check if the user has scrolled to the bottom of the scrollbar
    if (simplebarElement.scrollTop + simplebarElement.clientHeight === simplebarElement.scrollHeight) {
      // Do something here when the user reaches the end of the scrollbar
      if(this.$page * this.$pageSize < this.$total){
        this.$page++;
        this.getAll()
      }
    }
  }


  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe(res => {
      this.acc = res;
      this.notifs = [];
      this.getAll();
    })
  }
  gettingNotifs = false;
  getAll() {
    // this.gettingNotifs = true;
    // this.notifsService.apiNotificationGetAdminNotifcationsGet$Json({
    //   pageNume: this.$page,
    //   pageSize: this.$pageSize,
    // }).subscribe({
    //   next: (res) => {
    //     this.gettingNotifs = false;
    //     this.notifs.push(...(res.data || []));
    //     this.$total = res.totalPages || 0;
    //   },
    //   error: (err) => {
    //     this.gettingNotifs = false;
    //   }
    // })
  }

  
  readNotification(not: any) {
    // not.read = true;
    // this.unreadCount--;
    // this.notifsService.apiNotificationReadNotificationPut$Json({
    //   notifId: not.id
    // }).subscribe({
    //   error: () => {
    //     this.unreadCount++;
    //     not.read = false;
    //   }
    // })
  }


  readAll() {
    // this.unreadCount = 0;

    // this.notifs = this.notifs.map(n => ({ ...n, read: true }));
    // this.notifsService.apiNotificationReadAllNotificationPut$Json().subscribe({
    //   error: () => {
    //     this.getAll();
    //     this.getUnreadCount();
    //   }
    // });
  }

  unreadCount = 0;
  getUnreadCount() {
    // this.notifsService.apiNotificationUnReadNotificationCountGet$Json().subscribe(res => {
    //   this.unreadCount = res;
    // })
  }


  bell = new Audio('assets/audio/noti.wav');

  redirectTo(not: any) {
    if(!not.read){
      this.readNotification(not);
    }
    switch (not.type) {
      case 'COURSE':
        this.router.navigate(['/dashboard', 'booking-requests', 'tickets', 'ALL', not.relationId], {
          
        })
        break;
      case 'COMP':
        this.router.navigate(['/dashboard', 'booking-requests-comp', 'tickets', 'ALL', not.relationId], {
          
        })
        break;
     
      default:
        break;
    }
  }
}
