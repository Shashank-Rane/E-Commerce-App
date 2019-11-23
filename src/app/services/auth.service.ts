import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User){
    localStorage.setItem('Username', userInfo.username);
  }

  public isLoggedIn(){
    return localStorage.getItem('Username') !== null;

  }

  public logout(){
    localStorage.removeItem('Username');
  }
}
