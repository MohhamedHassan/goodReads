import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {
  loginForm:FormGroup|any
  loginError:string|any=""
  loading:any=false
  signinSub:Subscription|any
  constructor(private authservice:AuthService,private fb:FormBuilder,private router:Router,
    private title:Title) { 
      title.setTitle('Sign In')
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get getEmail() {
    return this.loginForm.get('email')
  }
  get getPassword() {
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }
login(value:User) {
  this.loading=true
  this.signinSub =  this.authservice.login(value).subscribe((res:any) => {
    
this.loading=false
     this.loginError=""
     localStorage.setItem('goodreadsToken',res.token)
     this.router.navigate(['profile/myBooks'])
   } , err => {
     this.loading=false
     this.loginError=err.error.error || err.error.errors
   })
}
ngOnDestroy() {
 if(this.signinSub) {
  this.signinSub.unsubscribe()
 }
}
}
