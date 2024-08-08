import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection;
   myToken = '';
   
  constructor() {
    if(localStorage.getItem('userToken') || sessionStorage.getItem('userToken')){
      this.myToken =  JSON.parse(localStorage.getItem('userToken') || 'null') || JSON.parse(sessionStorage.getItem('userToken')|| 'null')
    }
  }

  public startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(environment.api + "/realtimeHub", {
      accessTokenFactory: () => new Promise<string>((res) => {
        res(this.myToken)
      }),
      
    }) 
    .configureLogging(signalR.LogLevel.None)
    .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'));
  }

  public addNotificationsListener(callback: (data: any) => void) {
    this.hubConnection.on('getNotifcation', callback);
  }


}
