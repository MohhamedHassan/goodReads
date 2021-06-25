import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  addBook(value:any) {
  
    return this.http.post(`${environment.apiUrl}add-book`,value)
  }
  getAllBooks() {

    return this.http.get(`${environment.apiUrl}all-books`)
  }
  getUserBooks() {

    return this.http.get(`${environment.apiUrl}my-books`)
  }
  getBookById(id:any) {

    return this.http.get(`${environment.apiUrl}single-book/${id}`)
  }

  updateBook(id:any,value:any) {

    return this.http.patch(`${environment.apiUrl}update-book/${id}`,value)
  }
  updateBookImage(id:any,value:any) {

    return this.http.post(`${environment.apiUrl}book-image/${id}`,value)
  }
  deleteBook(id:any) {

    return this.http.delete(`${environment.apiUrl}delete-book/${id}`)
  }
  rateBook(id:any,rat:any) {
 let body = {
   rating:rat
 }
    return this.http.post(`${environment.apiUrl}rate-book/${id}`,body)
  }

}