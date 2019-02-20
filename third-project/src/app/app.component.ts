import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';
import { bypassSanitizationTrustHtml } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'third-project';

  constructor(private svc: TestService, private httpClient : HttpClient)  //equivalent of creating an attribute 'svc' for a class and giving it the new Instance
  {
    svc.printToConsole("Hey, Rajneesh here in app module!")

  }

  ngOnInit()
  {
    // let response = this.httpClient.get('https://api.github.com/users/koushikkothagal'); //its not good as 'get' returns asynch obj which is an 'observable'
    let obs = this.httpClient.get('https://api.github.com/users/rajneeshdubey');
    obs.subscribe((response)=>console.log(response));
  }
}
