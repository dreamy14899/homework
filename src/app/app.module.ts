
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PortComponent } from './port/port.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PortComponent,
    SkillComponent,
    ContactComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
