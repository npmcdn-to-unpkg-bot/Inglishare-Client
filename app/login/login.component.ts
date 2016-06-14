import { Component }       from '@angular/core';
import  { NgForm }    from '@angular/common';
import { Control, Validators, FormBuilder,ControlGroup, FORM_DIRECTIVES } from  "@angular/common";

@Component({
	selector: 'is-login',
	styleUrls:[],
	templateUrl: 'app/login/login.component.html', 
	directives: [FORM_DIRECTIVES]
})

export class LoginComponent {

	email: Control;
	password: Control;
	loginForm: ControlGroup;
	submitAttempt = false;
	
	constructor(private fb: FormBuilder) {
		this.email = new Control('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));

		this.password = new Control('', Validators.compose([Validators.required]));

		this.loginForm = fb.group({
			email:this.email,
			password:this.password
		})

	}

	onSubmit() {
		console.log(this.loginForm);
		this.submitAttempt = true;
	}

}