import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
class investigation{
  id: number;
  invetigationType: string;
  InvestigationId: number;
  rate: number;
  isSelected: boolean;
  testName:string;
  isAdded: boolean;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}
  ngOnInit() {
    

  }

}
