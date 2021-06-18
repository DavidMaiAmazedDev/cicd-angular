import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';
// @ts-ignore
import * as socketIo from 'socket.io-client';
import {SocketService} from '../socket.service';
import {DemoService} from '../demo.service';

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.component.html',
  styleUrls: ['./notifi.component.scss']
})
export class NotifiComponent implements OnInit {
  notifyMessage = '12';
  title = 'app';
  incomingmsg = [];
  msg = 'First Protocol';
  demoData: any;

  constructor(private notifyService: NotificationService, private socketService: SocketService, private demoService: DemoService) { }

  ngOnInit(): void {
    this.getNotification();
    this.getDemoData();
    // this.socketService.setUpconnection();
    // this.notifyService.setupSocketConnection();
    // this.notifyService.getNotification(this.notifyMessage);
    // this.notifyMessage = this.notifyService.getNotification();
    // console.log(this.notifyService.getNotification());
  }

  // tslint:disable-next-line:typedef
  sendOrder() {
    this.notifyService.sendNotification().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  getNotification() {
    this.socketService.getMessage().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.notifyMessage = data.emailId;
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  getDemoData() {
    this.demoService.getDemoData().subscribe(data => {
      this.demoData = data;
      // @ts-ignore
    }, error => {
      console.log(error);
    });
  }

}
