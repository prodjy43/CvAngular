import { NgModule } 	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { ContComponent } from './cont.component';


@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, NavbarComponent, ContComponent ],
	bootstrap: [ AppComponent, NavbarComponent, ContComponent ]
})

export class AppModule { }