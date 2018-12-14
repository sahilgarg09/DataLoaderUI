import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  userData: Object = {};
  ngOnInit() {
    this.updateProfile();
  }

  updateProfile(){
    var envSelectec = sessionStorage.getItem('selected');
    var session = JSON.parse(sessionStorage.getItem(envSelectec));
    this.userData = {
      name: session.userFullName,
      email: session.userEmail,
      orgName: session.organizationName,
      username: session.userName
    }
    this.userData['passwordExp'] = (session.passwordExpired == 'true')? 'Yes' : 'No';
    
  }

}
