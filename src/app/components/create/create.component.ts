import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  
  createEmployee ={
    id:'',
    employeename:'',
    employeesalary:'',
    employeeage:'',
    profileimage:''
  };

  isEmployeeCreated:boolean = false
  public reactiveForm: FormGroup;
  constructor(private fb: FormBuilder,  private dataser:DataService, public router:Router) { }

  ngOnInit() {
    
   
    this.reactiveForm = this.fb.group({
      
      id: ['', Validators.required],
      name:['', Validators.required],
      salary:['', Validators.required],
      age:['', Validators.required]
      })

  }
  get x() { return this.reactiveForm.controls; }

  onreactivesubmit() {
    console.log(this.reactiveForm.value)
  this.dataser.createEmp(this.reactiveForm.value).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/employees']);
    
  })
   
}


}