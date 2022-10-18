import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upper_and_lower_case';

  public text!:string
  public upper!:string
  public lower!:string

  up(){
    this.upper=this.text; 
  }

  down(){
    this.lower=this.text;

  }




}

