import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PagenotfoundComponent } from 'src/app/components/pagenotfound/pagenotfound.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WrongdetailsComponent } from './components/wrongdetails/wrongdetails.component';
import { CreateComponent } from './components/create/create.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';

const routes: Routes = [
  
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginformComponent},
  {path:'logout', component:LogoutComponent},
  {path:'wrongdetails', component:WrongdetailsComponent},
  {path:'home',component: HomeComponent},
  {path:'employees',component: EmployeesComponent},
  {path:'create',component:CreateComponent},
  {path:'viewemployee',component:ViewemployeeComponent},
  {path:'update',component:UpdateemployeeComponent},
  { path:'**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
