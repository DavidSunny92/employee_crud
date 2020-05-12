import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  loginUser: string;
  ngOnInit() {
    this.loginUser = localStorage.getItem("User")
    console.log(this.loginUser)
    if (this.loginUser != "admin") {
      this.router.navigate(["/login"])
    }
  }

}
