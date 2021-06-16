import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Socket} from 'ngx-socket-io';
import {map} from 'rxjs/operators';
import { io } from 'socket.io-client';
import {environment} from '../../environments/environment';
import {DefaultEventsMap} from 'socket.io-client/build/typed-events';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  testSocket: any;

  constructor(private http: HttpClient, private socket: Socket) { }

  // tslint:disable-next-line:typedef
  setupSocketConnection() {
    this.testSocket = io(environment.SOCKET_ENDPOINT);
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  getNotification(): string {
    let dataResponse: any;
    this.testSocket.on('somePeople', (data: any) => {
      console.log(data);
      dataResponse = data;
      return dataResponse.name;
    });
  }

  sendNotification() {
    const firstName = 'duy';
    const lastName = 'mai';
    const emailId = '007@gmail.com';
    const dataRequest = {firstName, lastName, emailId};
    console.log(dataRequest);
    // return this.http.post<any>('http://localhost:8085/api/v1/send-notification', dataRequest, {});
    return this.http.post<any>('http://localhost:8000/makeOrder', dataRequest, {});
  }

  // getMessage() {
  //   return this.socket
  //     .fromEvent<any>('msg')
  //     .pipe(map(data => data.msg));
  // }
  //
  // sendMessage(msg: string) {
  //   this.socket.emit('msg', msg);
  // }
}
