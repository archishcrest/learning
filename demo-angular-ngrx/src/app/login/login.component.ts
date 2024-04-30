import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    signInForm: FormGroup

    constructor(private fb: FormBuilder) { 

        this.signInForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.required]
        });
    }

    ngOnInit(): void {
    }

    onLogin(){

    }
}
