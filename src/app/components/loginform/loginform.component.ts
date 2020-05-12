import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';



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

  constructor(public router: Router, public toastr: ToastrManager) { }
  loginUser: any;
  ngOnInit() {
  }

  onsignup() {

    if (this.loginForm.value.email.toLowerCase() === 'admin@gmail.com' && this.loginForm.value.password.toLowerCase() == 'admin123') {

      this.loginUser = this.loginForm.value.email.toLowerCase();
      this.loginUser = this.loginUser.split('@')
      console.log(this.loginUser)
      this.loginUser = this.loginUser[0]
      this.toastr.successToastr(`Wellcome to ${this.loginUser}`, 'Success');
      localStorage.setItem('User', this.loginUser);
      this.router.navigate(['/home'])
    }
    else {
      if (this.loginForm.value.email.toLowerCase() != 'admin@gmail.com' && this.loginForm.value.password.toLowerCase() != 'admin123') {
        this.toastr.errorToastr('User Name & Password are wrong', 'Fail!');
      } else if (this.loginForm.value.email.toLowerCase() != 'admin@gmail.com') {
        this.toastr.errorToastr('User Name is wrong', 'Fail!');
      } else if (this.loginForm.value.password.toLowerCase() != 'admin123') {
        this.toastr.errorToastr(' Password is wrong', 'Fail!');
      }
    }


  }


}


