import {Component} from '@angular/core';
import {Login} from './login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector:'app-login',
    templateUrl:'login.component.html'
})
export class LoginComponent{
    logindetails:Login;
    loginform:FormGroup;
    showToggle:boolean;
    constructor()
    {   this.showToggle=false;
        this.logindetails=new Login();
        this.loginform= new FormGroup({
            username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('U00[a-zA-Z 0-9 ]*')]),
            password: new FormControl(null, [Validators.required, Validators.minLength(4)])
        });

    }
    public get username()
    {
        return this.loginform.get('username');

    }
    public get password()
    {
        return this.loginform.get('password');
        
    }
    
    submitdetails()
    {
        if(this.loginform.valid && this.password.value=="1234")
        {
            this.showToggle=true;
            this.logindetails.username= this.username.value;
        }
        else
        {
            alert("invalid username or password");
        }

    }
    Reset()
    {
       this.loginform.reset();
    }


}