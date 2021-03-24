import { Component, OnInit } from '@angular/core';
import { FormFieldTypes, PhoneFormFieldType   } from '@aws-amplify/ui-components';
import  { Hub } from '@aws-amplify/core';
import Amplify, { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stake-night';
  isSignedIn;
  isAdmin;

  formFields: FormFieldTypes;
  phoneFormField: PhoneFormFieldType;


  constructor() {
    this.addAuthListener();
    this.setupLoginForm();

}

  ngOnInit() {
    this.checkUserAuth();
  }

  addAuthListener(){
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
          case 'signIn':
              this.checkUserAuth();
              break;
          case 'signOut':
              location.reload();
              break;
      }
    })
  }

  setupLoginForm(){
    this.formFields = [
      {
        type: "email",
        label: "Email",
        placeholder: "Enter Email Address",
        required: true,
      },
      {
        type: "password",
        label: "Password",
        placeholder: "Enter Password",
        required: true,
      },
      {
        type: "name",
        label: "name",
        placeholder: "Enter Name",
        required: true,
      },
    ];
    this.phoneFormField =
    {
      type: "phone_number",
      label: "(Optional) Phone Number",
      placeholder: "Enter Phone Number",
      dialCode: "+353",
      required: false,
    }

    this.formFields.push(this.phoneFormField); 
  }

  checkUserAuth() {
    Auth.currentAuthenticatedUser()
      .then(currentUser => {
        this.isSignedIn = true;
        const userGroups = currentUser.signInUserSession.accessToken.payload["cognito:groups"];
        this.isAdmin = userGroups && userGroups.includes('admin');
      })
      .catch(err => {
        this.isSignedIn = false;
      });
  }

}
