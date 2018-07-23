import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Common } from '../Module/Helper/common';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'order-nav',
  templateUrl: './order-nav.component.html',
  styleUrls: ['./order-nav.component.css']
})
export class OrderNavComponent extends Common implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, 
    public router: Router, private authService: AuthService) {
    super(router);
  }

  @ViewChild(MatMenuTrigger) usermenu: MatMenuTrigger;

  OpenUserMenu(){
    this.isHandset$.subscribe((result) =>{
      if(!result){
        this.usermenu.openMenu();
      }
    });
  }

  ngOnInit(){
    super.ngOnInit();
  }
  
}
