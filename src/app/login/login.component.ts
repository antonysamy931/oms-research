import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Common } from '../Module/Helper/common';
import { CaptchaService } from '../Service/Captcha/captcha.service';
import { LoginService } from '../Service/Login/login.service';
import { AlertMessageComponent } from '../alert-message/alert-message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Common implements OnInit {

  loginUser: any = {};
  Captcha: any;
  CaptchaSVG: any;
  public hide : boolean = true;  

  constructor(public router: Router, 
    private captchaService: CaptchaService,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private matDialog: MatDialog) {
    super(router);
  }

  username = new FormControl('username',[Validators.required]);
  password = new FormControl('password',[Validators.required]);
  captcha = new FormControl('captcha',[Validators.required]);

  ngOnInit() {    
    this.LoadCaptcha();
  }

  ngAfterViewInit(){    
  }

  LoadCaptcha(){
    this.captchaService.GetCaptcha().subscribe((data) => {      
      this.Captcha = data;
      this.CaptchaSVG = this.Captcha.data;
      this.captcha.reset();
    }, (error) => {
      console.log(error);
    }, () => {
      document.getElementById('captcha-element').innerHTML = this.CaptchaSVG;
    });
  }

  OpenDialog(message): void{
    const dialogRef = this.matDialog.open(AlertMessageComponent,
                      {
                        width: "400px",
                        data: {title: "Login", content: message}
                      });
    dialogRef.afterClosed().subscribe(result =>{      
    });
  }

  Login(){
    if(this.Captcha.text == this.loginUser.Captcha){
      this.spinner.show();
      this.loginService.AuthenticateUser(this.loginUser).subscribe((data) => {        
        this.spinner.hide();
        localStorage.setItem("LoggedInUserData",JSON.stringify(data));
        window.location.replace("/");
      }, (error) => {        
        this.OpenDialog(error.error);
        this.LoadCaptcha();
        this.spinner.hide();
      }, () => {
        this.spinner.hide();
      });
    }else{
      this.OpenDialog("Invalid Captcha. Try again.");
      this.loginUser.Captcha = "";
      this.captcha.reset();
      this.LoadCaptcha();
    }   
  }

}
