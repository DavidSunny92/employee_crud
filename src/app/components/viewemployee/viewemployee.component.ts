import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  alldata: any [];

  constructor(private dataser:DataService) { }

  ngOnInit() {
    this.onView();

  }

  onView(){
    this.dataser.viewEmp().subscribe(res=>{
      console.log(res)
      console.log("result")
      this.alldata=res.data;
    })
  }
  

  
}
