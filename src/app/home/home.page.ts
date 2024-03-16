import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController, private ac:ActivatedRoute) {}

  ngOnInit() {
    let id = this.ac.snapshot.paramMap.get('id');
    alert(id);
  }



  irPag2(){
    this.nav.navigateBack('/page2/6');
  }

}
