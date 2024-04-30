import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule ,} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule,
        /*StoreDevtoolsModule.instrument({
            logOnly: environment.production,
        }),*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
