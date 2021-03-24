import { Component, OnInit } from '@angular/core';
import { FormFieldTypes, PhoneFormFieldType   } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-public-sign-up',
  templateUrl: './public-sign-up.component.html',
  styleUrls: ['./public-sign-up.component.css']
})
export class PublicSignUpComponent implements OnInit {

  constructor() {
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

   formFields: FormFieldTypes;
   phoneFormField: PhoneFormFieldType;

  ngOnInit(): void {
  }

}