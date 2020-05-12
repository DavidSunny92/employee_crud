import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginForm;

 

  registerdata = {
    email: '',
    password: ''
  };

  constructor(public router:Router) { }

  ngOnInit() {
  }

  onsignup() {
    if (this.loginForm.value.email.toLowerCase() ==='admin@gmail.com'){
      this.router.navigate(['/home'])
    }
    else {
      this.router.navigate(['/wrongdetails'])
    }
    {
     this.loginForm.reset();
    }
  
  }

 
  }


