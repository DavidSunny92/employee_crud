import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  employees:any[]=[];
  editid:number;

  

  
  isViewDetailsClicked:boolean = false;
  isCreateEmployeeClicked:boolean= false;
  isEditEmployeeClicked:boolean=false;

  constructor( private dataser:DataService, public router:Router) { }

  ngOnInit() 
  {
    this.getEmp()
    
  
  }

  getEmp(){
    this.dataser.getEmpDetails().subscribe(res =>{
      console.log(res);
      this.employees=res.data;
    })
  }

  onEdit(i){
   console.log(i);
  
    this.isEditEmployeeClicked=true;
    this.router.navigate(['/update']);
    
  }

  

  onCreate(){

    this.isCreateEmployeeClicked=true;
    this.router.navigate(['/create']);
    }

}
