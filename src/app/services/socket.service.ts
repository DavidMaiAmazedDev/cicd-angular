import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    // @ts-ignore
    return this.socket.fromEvent('somePeople');
  }
  setUpconnection () {
    this.socket.on('connection', (data: string) => {
      console.log('Working ' + data);
    });
  }
}
