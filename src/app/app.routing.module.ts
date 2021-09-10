import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArrayComponent } from './array/array.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ 
  
  ],
  imports: [
    RouterModule.forRoot([
  { path: 'array', component:ArrayComponent},
  { path: 'home',component:HomeComponent},
  { path: 'login',component:LoginComponent},
  { path: '',redirectTo:'/login',pathMatch : 'full'}
     
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


