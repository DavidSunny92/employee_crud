import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  // public updateForm: FormGroup;
  constructor(private fb: FormBuilder, private dataser:DataService) { }

  ngOnInit() {

    // this.updateForm = this.fb.group({
      
    //   id: [],
    //   name:[],
    //   salary:[],
    //   age:[]
    //   })
this.onView();
    
  }

  onView(){
    this.dataser.viewEmp().subscribe(res=>{
      console.log(res)
      console.log("result")
      // this.alldata=res.data;
    })
  }
  

}
