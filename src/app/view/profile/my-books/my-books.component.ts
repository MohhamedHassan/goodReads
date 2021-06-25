import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit ,OnDestroy{
  spnr:boolean=false
  books:Book|any =[]
  rateHistory:any=[]
  searchValue:any
  pageLoading:any=true
  deleteLoading:any=false
  deleteBookSub:Subscription|any
  getBooksSub:Subscription|any
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    public modalService: BsModalService,
    private bookservice:BookService) {
        if (this.activatedRoute.snapshot.data.myBooks && Array.isArray(this.activatedRoute.snapshot.data.myBooks)) {
          this.pageLoading=false
          this.books = this.activatedRoute.snapshot.data.myBooks
          for (let i = 0; i < this.books.length;i++) {
              this.rateHistory.push( [false,false,false,false,false] )
              for (let j = 0;j < Math.floor(this.books[i].rate);j++) {
                this.rateHistory[i][j]=true
              }
              if (this.books[i].rate != Math.floor(this.books[i].rate)) {
                this.rateHistory[i][Math.ceil(this.books[i].rate) - 1] = "half"
              }
          }
        } else {
          this.pageLoading=false
        }
   }

  ngOnInit(): void {
    
  }
  updateBook(id:any) {
    this.router.navigate(["/profile/addBook"],{queryParams : {id} })
  }
  deleteBook(id:any) {
    this.deleteLoading=true
  this.deleteBookSub=  this.bookservice.deleteBook(id).subscribe(
      res => {
       this.deleteLoading=false
       this.modalService.hide()
   this.getBooksSub =   this.bookservice.getUserBooks().subscribe(res => {
         if(res.hasOwnProperty('msg')) {
           this.books=[]
         } else {
          this.books = res
        }
       }, err => console.log(err))
        
      } , err => {
      }
    )
  }
  ngOnDestroy() {
     if(this.deleteBookSub) this.deleteBookSub.unsubscribe()
     if(this.getBooksSub) this.getBooksSub.unsubscribe()
  }
}
