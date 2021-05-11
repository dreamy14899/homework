import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:Data[];
  constructor(private backendService: BackendService) {
    this.about = [];
   }

  ngOnInit(): void {
    this.about = this.backendService.getAbout();
    console.log(this.about);
  }

}
