import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {



  createEmployee = {
    id: '',
    employeename: '',
    employeesalary: '',
    employeeage: '',
    profileimage: ''
  };

  isEmployeeCreated: boolean = false
  public reactiveForm: FormGroup;
  constructor(private fb: FormBuilder, private dataser: DataService, public router: Router, public toastr: ToastrManager) { }

  ngOnInit() {


    this.reactiveForm = this.fb.group({

      id: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    })

  }
  get x() { return this.reactiveForm.controls; }

  onreactivesubmit() {
    console.log(this.reactiveForm.value)
    this.dataser.createEmp(this.reactiveForm.value).subscribe(res => {
      console.log(res);
      if (res.status == "success") {
        this.toastr.successToastr('Employee created successfully ', 'Success!');
      } else {
        var msg = "Something Went Wrong"
        if (res.message) {
          msg = res.message
        }
        this.toastr.errorToastr(msg, 'Fail!');
      }
      this.router.navigate(['/employees']);

    }, error => {
      var msg = "Something Went Wrong"
      if (error.message) {
        msg = error.message
      }
      this.toastr.errorToastr(msg, 'Fail!');
    })

  }


}