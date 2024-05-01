import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getLoading } from './state/shared/shared.selector';
import { AppState } from './app.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'demo-angular';
    showLoading$!: Observable<boolean>;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.showLoading$ = this.store.select(getLoading);
    }
}
