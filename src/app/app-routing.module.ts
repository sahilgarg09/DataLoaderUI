import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Add components
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  //declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
