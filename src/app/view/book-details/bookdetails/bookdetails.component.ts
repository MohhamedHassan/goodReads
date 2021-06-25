import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit, OnDestroy {
BookDetails:any
rateHistory:any=[]
dataSub:Subscription|any
bookSub:Subscription|any
rateSub:Subscription|any
pageLoading:any=true
rateMe:any=[[false,false,false,false,false],{count:-1},{loading:false},
{message:false},]

  constructor(
    private title:Title,private activatedRoute:ActivatedRoute,private bookservice:BookService) { 
    this.rateHistory=[false,false,false,false,false]
   this.dataSub =  this.activatedRoute.params.subscribe(param => {
    this.bookSub =    this.bookservice.getBookById(param.id).subscribe((res:any) => {
            
             this.pageLoading=false
             this.BookDetails = res
             title.setTitle( `${res.name}`)
             for (let j = 0;j < Math.floor(this.BookDetails.rate);j++) {
              this.rateHistory[j]=true
            }
            if (this.BookDetails.rate != Math.floor(this.BookDetails.rate)) {
              this.rateHistory[Math.ceil(this.BookDetails.rate) - 1] = "half"
            }
        }, err => {
          this.pageLoading=false
         alert(err.errors.error)
        } )
    })
  }
  ngOnInit(): void {
  }
  orangeOnHover(i:any) {

    for (let index = 0 ; index <= i; index++) {
      this.rateMe[0][index]=true
   }
  if(i<4) {
    for (let index = 4 ; index > i; index--) {
      this.rateMe[0][index]=false
    }
  }
  
  }
  grayOnMouseleave() {
   if(this.rateMe[1].count>-1) {
    for (let index = 0 ; index <= this.rateMe[1].count; index++) {
      this.rateMe[0][index]=true
    }
   }
    if(this.rateMe[1].count<4) {
      for (let index = 4 ; index > this.rateMe[1].count; index--) {
       this.rateMe[0][index]=false
      }
   
    }
    
    
  
  
  
  
  }
  orangeOnClick(i:any,BookId:any) {
   this.rateMe[1].count=i
   this.rateMe[2].loading = true
this.rateSub =     this.bookservice.rateBook(BookId,i+1).subscribe(
        
       res => {
        this.rateMe[2].loading = false
        this.rateMe[3].message = true
        setInterval(() => {
         this.rateMe[3].message = false
        },2000)
       },
       err => {
        this.rateMe[2].loading = false
       }
     )
  }
  track(index:number) {
    return index
  }
  ngOnDestroy() {
    if(this.dataSub) {
      this.dataSub.unsubscribe()
    }
    if(this.bookSub) {
      this.bookSub.unsubscribe()
    }
    if(this.rateSub) {
      this.rateSub.unsubscribe()
    }
  }
}
