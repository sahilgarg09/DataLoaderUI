import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Add layouts
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';


//Add components
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SoqlQueryComponent } from './components/soql-query/soql-query.component';
import { DeleteQueryComponent } from './components/delete-query/delete-query.component';
import {InsertComponentComponent} from './components/insert-component/insert-component.component';
import {UpsertComponentComponent} from './components/upsert-component/upsert-component.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';

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
		//canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			}
		]
	},{ 
		path: '', 
		component: HomeLayoutComponent, 
		//canActivate: [AuthGuard],
		children: [
			{
				path: 'user-profile',
				component: UserProfileComponent
			}
		]
	},{ 
		path: '', 
		component: HomeLayoutComponent, 
		//canActivate: [AuthGuard],
		children: [
			{
				path: 'soql-query',
				component: SoqlQueryComponent
			}
		]
	},{ 
		path: '', 
		component: HomeLayoutComponent, 
		//canActivate: [AuthGuard],
		children: [
			{
				path: 'delete-query',
				component: DeleteQueryComponent
			}
		]
	},{ 
		path: '', 
		component: HomeLayoutComponent, 
		//canActivate: [AuthGuard],
		children: [
			{
				path: 'insert',
				component: InsertComponentComponent
			}
		]
	},{ 
		path: '', 
		component: HomeLayoutComponent, 
		//canActivate: [AuthGuard],
		children: [
			{
				path: 'upsert',
				component: UpsertComponentComponent
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
