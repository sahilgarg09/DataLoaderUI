import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { SoqlQueryComponent } from './components/soql-query/soql-query.component';
import { DeleteQueryComponent } from './components/delete-query/delete-query.component';
import { InsertComponentComponent } from './components/insert-component/insert-component.component';
import { UpsertComponentComponent } from './components/upsert-component/upsert-component.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrgToOrgComponent } from './components/org-to-org/org-to-org.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestService } from './rest/rest.service';
import { AccordionComponent } from './shared/accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavbarComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    SoqlQueryComponent,
    DeleteQueryComponent,
    InsertComponentComponent,
    UpsertComponentComponent,
    UserProfileComponent,
    AccordionComponent,
    OrgToOrgComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuard, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
