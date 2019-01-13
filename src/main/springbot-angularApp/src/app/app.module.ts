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
import { SoqlQueryComponent, ViewRelatedRecord } from './components/soql-query/soql-query.component';
import { DeleteQueryComponent } from './components/delete-query/delete-query.component';
import { InsertComponentComponent } from './components/insert-component/insert-component.component';
import { UpsertComponentComponent } from './components/upsert-component/upsert-component.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrgToOrgComponent } from './components/org-to-org/org-to-org.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestService } from './rest/rest.service';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { ExportToOrgComponent, ConfirmationDialog } from './components/export-to-org/export-to-org.component';
import {
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ExportComponent } from './components/export/export.component';


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
    ExportToOrgComponent,
    ConfirmationDialog,
    ViewRelatedRecord,
    ExportComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [AuthService, AuthGuard, RestService],
  bootstrap: [AppComponent],
  entryComponents: [ExportToOrgComponent, ConfirmationDialog, ViewRelatedRecord]
})
export class AppModule { }
