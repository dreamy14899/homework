import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  Skill:Data[];
  constructor(private backendService: BackendService) {
    this.Skill = [];
   }
  

  ngOnInit(): void {
    this.Skill = this.backendService.getSkill();
    console.log(this.Skill);
  }

}
