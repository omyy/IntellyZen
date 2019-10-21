import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { loginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.login.html',
  styleUrls: ['./app.component.css'],
  providers: [loginService]
})

@Injectable()
export class AppComponent {
  title = 'IntellyZenApp';

    constructor (private loginservice: loginService)
    {

    }

  findData()
  {
    this.loginservice.getForecastData();
  } 
}
