import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Binding';
  appName = 'This is an one-way data binding example!';
  header1 = 'Number Interpolation';

  clientName:string = 'Barba Kristian Carlo I.';

  appliedCSSClass = 'green';
  notapplieCSSClass = false;
  myColor = 'red';

  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  showData($event:any){
    console.log("Button is Clicked");
  }

  getData(data:any){
    console.warn(data)
  }
}
