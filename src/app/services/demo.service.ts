import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileData} from '../model/file-data.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getDemoData() {
    return this.http.get(`${environment.serviceUrl}/demoData`);
  }
}
