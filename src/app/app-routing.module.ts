import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Add layouts
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';


//Add components
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ 
		path: '', 
		component: LoginLayoutComponent,
		children: [{
			path: 'login',
			component: LoginComponent
		}]
	},
	{ 
		path: '', 
		component: HomeLayoutComponent, 
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			}
		]
	}
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
