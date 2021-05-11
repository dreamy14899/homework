import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Data[];
  constructor(private backendService: BackendService) {
    this.contact = [];
   }

  ngOnInit(): void {
    this.contact = this.backendService.getcontact();
    console.log(this.contact);
  }

}
