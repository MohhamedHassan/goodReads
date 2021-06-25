import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BookService } from 'src/app/services/book.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit,OnDestroy {

  userInfo:any
  choosenImage:any
  modalRef: BsModalRef|any
  updateProfileForm:FormGroup|any
  updateProfileError:string = ""
  uploadProfilePictureLoading:any=false
  deleteProfilePictureLoading:any=false
  pageLoading=true
  editLoading=false
  deleteAccountLoading=false
  setImageSub:Subscription|any
  userInfoSub:Subscription|any
  deleteImgSub:Subscription|any
  deleteAccountSub:Subscription|any
   constructor(
     private title:Title,
    private router:Router, 
    private auth:AuthService,
     private modalService: BsModalService,
     private fb:FormBuilder,
     private activatedRoute:ActivatedRoute) { 
       title.setTitle('My Profile')
      if (activatedRoute.snapshot.data.profile) {
        this.pageLoading=false
        this.userInfo = activatedRoute.snapshot.data.profile
      }
   }
 
   ngOnInit(): void {
   }



 chooseImage(event:any) {
    this.choosenImage=event.target.files[0]
 }
 uploadImage() {
  this.uploadProfilePictureLoading=true
   let profileePic =  new FormData()
   profileePic.append('profilePhoto',this.choosenImage)
  this.setImageSub = this.auth.setUserImage(profileePic).subscribe((res:any) => {
     this.uploadProfilePictureLoading=false
    this.modalRef.hide()
    this.userInfo = res
   } , err => {
    this.uploadProfilePictureLoading=false
    alert(err.error.error)
   })
 }

 editProfile(value:any) {
   this.editLoading=true
   let body:any = {}
   if (value.password)  body.password =value.password
     body.name =value.name
     body.email =value.email
 this.userInfoSub =  this.auth.updateUserInfo(body,this.userInfo._id).subscribe((res:any) => {
     this.editLoading=false
     this.updateProfileError=''
     this.userInfo=res.result
     this.modalService.hide()
   }, err => {
     this.editLoading=false
     this.updateProfileError=err.error.errors
   })
 }

 openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
   this.updateProfileForm = this.fb.group({
     name:`${this.userInfo.name}`,
     email:`${this.userInfo.email}`,
     password:''
   })
 }
deleteProfilePic() {
  this.deleteProfilePictureLoading=true
 this.deleteImgSub = this.auth.deleteProfilePic().subscribe(
    res => {
      this.deleteProfilePictureLoading=false
      this.userInfo =res
      this.modalService.hide()
    },
    err => {
      this.deleteProfilePictureLoading=false
      alert(err.error.error)
    }
  )
}
deleteUser() {
  this.deleteAccountLoading=true
this.deleteAccountSub=  this.auth.deleteUser().subscribe(
    res => {
      this.deleteAccountLoading=false
      localStorage.removeItem('goodreadsToken')
      this.modalService.hide()
      this.router.navigate(['/home'])
    },
    err => {
      this.deleteAccountLoading=false
       alert(err.error.error)
    }
  )
}
ngOnDestroy() {
  if(this.setImageSub) this.setImageSub.unsubscribe()
  if(this.userInfoSub) this.userInfoSub.unsubscribe()
  if(this.deleteImgSub) this.deleteImgSub.unsubscribe()
  if(this.deleteAccountSub) this.deleteAccountSub.unsubscribe()
}
}
