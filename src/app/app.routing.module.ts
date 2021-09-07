import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArrayComponent } from './array/array.component';


@NgModule({
  declarations: [ 
  
  ],
  imports: [
    RouterModule.forRoot([
  { path: 'array', component:ArrayComponent},
     
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


