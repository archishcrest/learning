import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';    
//import {AuthGuard} from './auth.guard';

import { LoginModule } from './login/login.module';
//import { RegisterComponent } from './register/register.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
	{ 
	    path:'',
	    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
	},
	{ 
	    path:'login',
	    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
	},
	{ 
	    path:'register',
	    loadChildren: () => import('./register/register.module').then(m=>m.RegisterModule)
	}
]

@NgModule({
  	imports: [ RouterModule.forRoot(routes, { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}