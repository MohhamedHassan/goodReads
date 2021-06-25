import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signUp(value:User) {
    return this.http.post(`${environment.apiUrl}signup`,value)
  }
  login(value:User) {
    return this.http.post(`${environment.apiUrl}login`,value)
  }
  signOut() {
    return this.http.post(`${environment.apiUrl}logout`,'')
  }
  getToken() {
    return localStorage.getItem("goodreadsToken")
  }
  getProfile() {
    return this.http.get(`${environment.apiUrl}profile`)
  }
  isLogin() {
    return !!localStorage.getItem('goodreadsToken')
  }
  setUserImage(value:any) {
    return this.http.post(`${environment.apiUrl}profile-photo`,value)
  }
  updateUserInfo(value:User,id:any) {
    return this.http.patch(`${environment.apiUrl}update-user/${id}`,value)
  }
  deleteProfilePic() {
    return this.http.delete(`${environment.apiUrl}profile-photo`)
  }
  deleteUser() {
    return this.http.delete(`${environment.apiUrl}delete-profile`)
  }
}
