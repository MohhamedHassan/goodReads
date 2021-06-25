import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit , OnDestroy{
  show=false
  signout: Subscription|any
  constructor(public auth:AuthService,private router:Router) { }
  showNav() {
    this.show=!this.show
  }
  ngOnInit(): void {
  }
  // start siginout method
  signOut() {
  this.signout =   this.auth.signOut().subscribe(res => {
      localStorage.removeItem('goodreadsToken')
      this.router.navigate(['/home'])
    }  , err => {
      alert(err.erros.error)
    })
  }
  // end siginout method
  ngOnDestroy() {
     if (this.signout) {
      this.signout.unsubscribe()
     }
  }
}
