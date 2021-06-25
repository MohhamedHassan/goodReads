import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit , OnDestroy {
createAccoutForm:FormGroup|any
createAccountError:string|any=""
image:any
loading:any=false
signupSub:Subscription|any
  constructor(private fb:FormBuilder,
    private authservice:AuthService,
    private router:Router,
    private title:Title) {
      title.setTitle("Sign Up")
     this.createAccoutForm = this.fb.group({
        name:['',[Validators.required,Validators.minLength(4)]],
        email:['',[Validators.email,Validators.required]],
        password:['',[Validators.required,Validators.minLength(6)]],
        profilePhoto:''
     })
   }

  ngOnInit(): void {
  }
  get getName() {
    return this.createAccoutForm.get('name')
  }
  get getEmail() {
    return this.createAccoutForm.get('email')
  }
  get getPassword() {
    return this.createAccoutForm.get('password')
  }
 signUp(value:User) {
   this.loading=true
this.signupSub =    this.authservice.signUp(value).subscribe((res:any) => {
     this.createAccountError=""
     this.loading=false
      localStorage.setItem('goodreadsToken',res.token)
      this.router.navigate(['profile/myBooks'])

     console.log(res)
   }, err => {
     this.loading=false
       this.createAccountError = err.error.error || err.error.errors 
       console.log(err)
   })
 } 
 ngOnDestroy() {
   if( this.signupSub) {
       this.signupSub.unsubscribe()
   }

 }
}
