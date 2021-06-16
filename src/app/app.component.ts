import {Component, OnInit} from '@angular/core';
import {NotificationService} from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'test-project';

  constructor(private socketService: NotificationService) {}

  ngOnInit(): void {
    // this.socketService.setupSocketConnection();
  }
}
