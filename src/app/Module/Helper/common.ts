import { OnInit } from "@angular/core";
import { AuthService } from "../../Service/Auth/auth.service";
import { Router } from "@angular/router";

export abstract class Common implements OnInit {
    constructor(public router: Router){
    }
    private auth: AuthService = new AuthService();    

    ngOnInit(){        
        if(!this.auth.IsLoggedIn() 
        && window.location.pathname.split('/').indexOf('reset-password') == -1
        && window.location.pathname.split('/').indexOf('forgot-password') == -1){
            this.router.navigateByUrl('/login');
        }
    }

    Logout(){
        localStorage.clear();
        this.router.navigateByUrl('/login');        
    }

    Redirect(url){
        console.log(url);
        setTimeout(() => {
            this.router.navigateByUrl(url);
        }, 1000);        
    }

}
