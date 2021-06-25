import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit,OnDestroy {

  addBookForm: FormGroup | any
  choosenImage: any
  updatedImage:any
  addBookError: string = ''
  addLoading:any=false
  updateLoading=false
  updatebuttonLoading=false
  updateImageLoading=false
  id: any
  addOrUpdate: any = true
  paramSub:Subscription|any
  bookSub:Subscription|any
  addSub:Subscription|any
  updateSub:Subscription|any
  updateImgSub:Subscription|any
  constructor(private fb: FormBuilder,
    private book: BookService,
    private router: Router,
    private toastr: ToastrService,
    private activated: ActivatedRoute,
    public modalService: BsModalService,
  ) {
    // start build addBook Form
    this.addBookForm = fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    })
    // end build addBook Form
    // start get the book id to update it 
 this.paramSub =    activated.queryParamMap.subscribe((param: any) => {
      // check if is there a parameter or not if there a paramete make update book if no parameter found add bok
      if (param.params.hasOwnProperty('id')) {
        this.updateLoading=true
        this.addOrUpdate = false
        this.id = param.params.id
 this.bookSub = this.book.getBookById(param.params.id).subscribe((res: any) => {
          this.updateLoading=false
          this.addBookForm.patchValue({
            name: `${res.name}`,
            type: `${res.type}`,
            description: `${res.description}`,
          })
        }, err => {
          this.updateLoading=false
        })
      }
      else {
        this.addOrUpdate = true
        this.addBookForm.reset()
      }
    })
    // end get the book id to update it 
  }

  // strat get controls for the add book form 
  get getControls() {
    return this.addBookForm.controls
  }
  // end get controls for the add book form 
  // start  save the chosen image when user use the input file
  chooseImage(e: any) {
    this.choosenImage = e.target.files[0]
  }
  updateImage(e: any) {
    this.updatedImage = e.target.files[0]
  }
  // end  save the chosen image when user use the input file
  ngOnInit(): void {
  }
  // start add book function 
  addBook(value: any) {
    this.addLoading=true
    let addBookFormData = new FormData()
    addBookFormData.append('name', value.name)
    addBookFormData.append('type', value.type)
    addBookFormData.append('description', value.description)
    addBookFormData.append('image', this.choosenImage)
this.addSub = this.book.addBook(addBookFormData).subscribe(res => {
      this.addLoading=false
      this.toastr.success('Book added successfully', '');
      this.addBookError = ""
      this.router.navigate(['/profile/myBooks'])
    }, err => {
      this.addBookError = err.error.errors
      this.addLoading=false
    })
  }
   // end add book function 
  updateBook() {
    this.updatebuttonLoading=true
    let body = {
      name: this.addBookForm.value.name,
      type: this.addBookForm.value.type,
      description: this.addBookForm.value.description
    }

  this.updateSub = this.book.updateBook(this.id, body).subscribe(res => {
      this.updatebuttonLoading=false
      this.toastr.success('Book updated successfully', '');
      this.addBookError = ""
      this.router.navigate(['/profile/myBooks'])
    }, err => {
      this.addBookError = err.error.errors
      this.updatebuttonLoading=false
    })
  }
  updateBookImage() {
    this.updateImageLoading=true
    let x = new FormData()
    x.append('image', this.updatedImage)
 this.updateImgSub=   this.book.updateBookImage(this.id, x).subscribe(
      res => {
        this.updateImageLoading=false
        this.toastr.success('Book image updated successfully', '');
        this.addBookError = ""
        this.router.navigate(['/profile/myBooks'])
        this.modalService.hide()
      }, err => {
        this.updateImageLoading=false
        this.modalService.hide()
        this.addBookError = err.error.error
      }
    )
  }
ngOnDestroy() {
  if(this.paramSub) this.paramSub.unsubscribe()
  if(this.bookSub) this.bookSub.unsubscribe()
  if(this.addSub) this.addSub.unsubscribe()
  if(this.updateSub) this.updateSub.unsubscribe()
  if(this.updateImgSub) this.updateImgSub.unsubscribe()
}
}
