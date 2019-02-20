import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  userName: string = '';
  response : any;
  constructor(private httpClient: HttpClient)  //equivalent of creating an attribute 'svc' for a class and giving it the new Instance
  {
    // svc.printToConsole("Hey, Rajneesh here in inner module!")
  }

  search() {
    let obs = this.httpClient.get('https://api.github.com/users/' + this.userName);
    obs.subscribe((response) => { 
      this.response = response;
      console.log(this.response) });
  }
  ngOnInit() {
  }

}
