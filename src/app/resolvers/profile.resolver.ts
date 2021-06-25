import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<boolean> {
  constructor (private auth:AuthService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.auth.getProfile()
  }
}
