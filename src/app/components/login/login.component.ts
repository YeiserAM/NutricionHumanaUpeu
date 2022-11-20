import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    }

  users = new User();

  user = {
    username: 'chris',
    password: '123'
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  iniciarsesion(){
    // this.router.navegate(['/menu'])
  }

 logIn(){
   console.log(this.users);
  this.loginService.singin(this.users).subscribe( (res) => {
     console.log(res);
     sessionStorage.setItem('data',res.data);
    this.router.navigate(['/menu/dashboard']);
    console.log('true');
  },
   err=>console.log(err)
  )

}

}
