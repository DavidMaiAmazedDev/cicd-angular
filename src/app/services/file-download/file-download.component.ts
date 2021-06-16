import { Component, OnInit } from '@angular/core';
import {FileDownloadService} from '../file-download.service';
import {FileData} from '../../model/file-data.model';
// @ts-ignore
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit {
  fileList?: FileData[];
  constructor(private downloadService: FileDownloadService) { }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.downloadService.list().subscribe(result => {
      this.fileList = result;
    });
  }

  downloadFile(fileData: FileData): void {
    this.downloadService
      .download(fileData.filename)
      .subscribe(blob => saveAs(blob, fileData.filename));
  }

}
