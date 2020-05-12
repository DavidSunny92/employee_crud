import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getEmpDetails(): Observable <any> {
    console.log("result")
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');

  }

  createEmp(data):Observable <any> {

    console.log("res")
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/17',{"name":"test1","salary":"1123","age":"23"})
  }

  viewEmp() : Observable <any>{
    console.log("response")
    return this.http.get('http://dummy.restapiexample.com/api/v1/employee/24');
  }
}
