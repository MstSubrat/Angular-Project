import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capx } from '../capx';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CapxService {
  private baseUrl="hhttp://localhost:3000/capx";

  constructor(private http:HttpClient) { }

  capxRprt(data:any){
    return this.http.post(`${this.baseUrl}`,data);
  }
}
