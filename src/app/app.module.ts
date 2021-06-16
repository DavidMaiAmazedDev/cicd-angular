import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifiComponent } from './services/notifi/notifi.component';
import {Socket, SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {HttpClientModule} from '@angular/common/http';
import {NotificationService} from './services/notification.service';
import { FileDownloadComponent } from './services/file-download/file-download.component';

// @Injectable()
// export class SocketOne extends Socket {
//   constructor() {
//     super({ url: 'localhost:8000', options: {} });
//   }
// }
//
// @Injectable()
// export class SocketTwo extends Socket {
//   constructor() {
//     super({ url: 'localhost:8000', options: {} });
//   }
// }

const config: SocketIoConfig = { url: 'localhost:8000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NotifiComponent,
    FileDownloadComponent
  ],
  imports: [
    SocketIoModule.forRoot(config),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
