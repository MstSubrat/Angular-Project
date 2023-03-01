import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl="http://localhost:8080/user/login";
  constructor(private http:HttpClient,private route: Router) { }
 
  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.http.post(`${this.baseUrl}`,user);

  }
  

}

