import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from '../services/book.service';

@Injectable({
  providedIn: 'root'
})
export class GetallbooksResolver implements Resolve<boolean> {
  constructor(private books:BookService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.books.getAllBooks()
  }
}
