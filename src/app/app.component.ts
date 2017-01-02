import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserdetailComponent} from './userdetail/userdetail.component';
import {NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  public sid : boolean   ;
  public mod ;
  public width ;
  public height;
  public path;
  constructor(ngZone:NgZone,router:Router, private location:Location) {
   
  router.events.subscribe(() => this.routeChanged());

    // window.onresize = (e) =>
    // {
        ngZone.run(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            if(this.width <= 850 )
            {
            	this.sid = false;
              this.mod = "over";
            }
            else{
            	
              this.sid = true;
              this.mod = "side";

            }
        });
    // }
}

 public routeChanged():void {
      this.path = window.location.pathname;
  }  
}
