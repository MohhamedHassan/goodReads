import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.scss']
})
export class AllbooksComponent implements OnInit , OnDestroy{
  allBooks: Book | any = []
  stars: any = []
  searchValue:any
  loading:any=true
  rateSub:Subscription|any
  constructor(private activatedRoute: ActivatedRoute, private book: BookService,
    private title:Title) {
        title.setTitle('GoodReads')
    if (this.activatedRoute.snapshot.data.AllBooks && Array.isArray(this.activatedRoute.snapshot.data.AllBooks)) {
      this.allBooks = this.activatedRoute.snapshot.data.AllBooks
   
      this.loading=false
      
      for (let i = 0; i < this.allBooks.length; i++) {
        this.stars.push([[false, false, false, false, false],
        { count: -1 },
        { loading: false },
        { message: false },
        [false, false, false, false, false]])
        for (let j = 0;j < Math.floor(this.allBooks[i].rate);j++) {
          this.stars[i][4][j]=true
        }
        if (this.allBooks[i].rate != Math.floor(this.allBooks[i].rate)) {
          this.stars[i][4][Math.ceil(this.allBooks[i].rate) - 1] = "half"
        }
      }
    } else {
      this.loading=false
    }
  }

  ngOnInit(): void {
  }

  orangeOnHover(i: any, containerIndex: any) {

    for (let index = 0; index <= i; index++) {
      this.stars[containerIndex][0][index] = true
    }
    if (i < 4) {
      for (let index = 4; index > i; index--) {
        this.stars[containerIndex][0][index] = false
      }
    }

  }
  grayOnMouseleave(i: any, containerIndex: any) {
    if (this.stars[containerIndex][1].count > -1) {
      for (let index = 0; index <= this.stars[containerIndex][1].count; index++) {
        this.stars[containerIndex][0][index] = true
      }
    }
    if (this.stars[containerIndex][1].count < 4) {
      for (let index = 4; index > this.stars[containerIndex][1].count; index--) {
        this.stars[containerIndex][0][index] = false
      }

    }






  }
  ratebook(i: any, containerIndex: any, BookId: any) {
    this.stars[containerIndex][1].count = i
    this.stars[containerIndex][2].loading = true
   this.rateSub = this.book.rateBook(BookId, i + 1).subscribe(

      res => {
        this.stars[containerIndex][2].loading = false
        this.stars[containerIndex][3].message = true
        setInterval(() => {
          this.stars[containerIndex][3].message = false
        }, 2000)
      },
      err => {
        this.stars[containerIndex][2].loading = false
      }
    )
  }
  track(index: number) {
    return index
  }
  ngOnDestroy() {
    if(this.rateSub) {
      this.rateSub.unsubscribe()
    }
  }
}
