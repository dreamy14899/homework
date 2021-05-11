import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  port:Data[];
  constructor(private backendService: BackendService) {
    this.port = [];
   }
  

  ngOnInit(): void {
    this.port = this.backendService.getport();
    console.log(this.port);
  }

}

