import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { loginStart } from './state/login.action';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    signInForm: FormGroup

    constructor(private fb: FormBuilder, private store: Store<AppState>) { 

        this.signInForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.required]
        });
    }

    ngOnInit(): void {
    }

    onLogin(){

        const email = this.signInForm.value.email;
        const password = this.signInForm.value.password;
        this.store.dispatch(loginStart({ email, password }));
    }
}
