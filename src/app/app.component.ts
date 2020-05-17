import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-binding';
  hasError : boolean = false;
  styleArray = ['errorClass', 'boldClass'];
  styleObject = {
    'errorClass': false,
    'boldClass':true,
    'italicsClass':true,
    'greenClass':true
  }

  getGreenClass(){
    return 'greenClass';
  }
  
}
