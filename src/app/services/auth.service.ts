import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.getUser();
  }
  islogin = new BehaviorSubject<boolean>(false);
  getUser() {
    if (localStorage.getItem('user_id')) {
      this.islogin.next(true);
    }
  }
  signup(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/signUp', data);
  }
  login(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/login', data);
  }
}
