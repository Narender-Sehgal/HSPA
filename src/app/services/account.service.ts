import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }
 
  createUrl = 'http://localhost:5000/api/account/Register';
  loginUrl = 'http://localhost:5000/api/account/Login';
 
  create(data: any): Observable<any> {
    debugger
    return this.http.post(this.createUrl, data);
  }
  login(data: any): Observable<any> {
    debugger
    return this.http.post(this.loginUrl, data);
  }
}