import { Injectable } from '@angular/core';
import { About, contact, port, Skill } from './models/data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getAbout(): About[] {
    return [{
      name: "อักษรสวรรค์ สวัสดี",
      nickname: "ดรีม",
      age: "21",
      study: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา น่าน",
      grade:"ปริญญาตรี",
      board:"วิทยาศาสตร์และเทคโนโลยีการเกษตร",
      branch:"วิทยาการคอมพิวเตอร์"
    }];
  }
  getSkill(): Skill[] {
    return [{
      m1: "HTML",
      m2:"My SQL",
      m3:"Javascript",
      m4:"Node JS"
    }];
  }
  getport(): port[]{
    return[{
      name: "อักษรสวรรค์ สวัสดี",
      nickname: "ดรีม",
      age: "21",
      study: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา น่าน",
      grade:"ปริญญาตรี",
      board:"วิทยาศาสตร์และเทคโนโลยีการเกษตร",
      branch:"วิทยาการคอมพิวเตอร์"
    }]; 
  }
  getcontact():contact[]{
    return[{
      addess:"221 หมู6 ต.ไชยสถาน อ.เมืองน่าน จ.น่าน 55000",
      tel:"081-595-4310"

    }];

  }
}
