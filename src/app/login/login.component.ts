import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material.Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  icon=faCalendar;


  constructor(private userservice:UserService, private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  // respdata:any;
  // ProceedLogin(logindata: any) {
  //   if (logindata.valid) {

  //     this.service.ProceedLogin(logindata.value).subscribe(item => {
  //       this.respdata=item;
  //          if(this.respdata!=null){

  //           localStorage.setItem('token', this.respdata.jwtToken);
  //           this.route.navigate(['home']);

  //          }else{
  //           alert("login failed");
  //          }
  //     });

    //}

    // console.log(logindata.value);

  //}
  //  RedirectRegister(){
  //    this.route.navigate(['register']);

  //  }
  userLogin(){
    this.userservice.loginUser(this.user).subscribe(data=>{
      localStorage.setItem("userName",this.user.userName);
      localStorage.setItem("password",this.user.password);
      this.route.navigate(['home']);

    },error=>alert("Sorry!! Please enter correct UserName and Password"));
  }

}
