import { Component, DoCheck } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  
  constructor(private router:Router){}
  title = 'angular_project';
  isMenuVisible=true;
  ngDoCheck(): void {
    const currentroute=this.router.url;
    if(currentroute=='/login'){
      this.isMenuVisible=false;
    }else if(currentroute=='/entry'){
      this.isMenuVisible=false;
    }
    else{
      this.isMenuVisible=true;
    }
    console.log(currentroute);
  }
  logout(){
    localStorage.clear();
  }

}
