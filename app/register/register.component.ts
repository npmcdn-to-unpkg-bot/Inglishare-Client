import { Component }       from '@angular/core';
import  { NgForm }    from '@angular/common';
import { Control, Validators, FormBuilder,ControlGroup, FORM_DIRECTIVES } from  "@angular/common";
import {RadioButton} from 'primeng/primeng';

@Component({
	selector: 'is-register',
	styleUrls:[],
	templateUrl: 'app/register/register.component.html', 
	directives: [FORM_DIRECTIVES]
})

export class RegisterComponent {

	email: Control;
	password: Control;
	confirmPassword:Control;
	firstName: Control;
	lastName: Control;
	gender: string;
	registerForm: ControlGroup;

	submitAttempt = false;
	
	constructor(private fb: FormBuilder) {
		this.email = new Control('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
		this.firstName = new Control('', Validators.compose([Validators.required]));
		this.lastName = new Control('', Validators.compose([Validators.required]));
		this.password = new Control('', Validators.compose([Validators.required]));
		this.confirmPassword = new Control('');
		this.registerForm = fb.group({
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			password: this.password,
			confirmPassword: this.confirmPassword
		}, { validator: this.matchingPasswords('password', 'confirmPassword') });

	}

	matchingPasswords(passwordKey: string, confirmPasswordKey: string ) {

		return (group:ControlGroup):{[key:string]:any}=>{
			let password = group.controls[passwordKey];
			let confirmPassword = group.controls[confirmPasswordKey];

			if(password.value !== confirmPassword.value) {
				return {
						mismatchedPasswords: true
				}
			}
		}
	}

	onSubmit() {
		this.registerForm.value.gender = this.gender;
		console.log(this.registerForm.value);
		this.submitAttempt = true;

	}

}