import { Component, OnInit } from '@angular/core';
import {  NavController } from "@ionic/angular";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private nav: NavController) {

   }

  ngOnInit() {
    
  }

  irPagina2(){
    this.nav.navigateBack('/home')  }

}
