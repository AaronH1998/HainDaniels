import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HainDanielsClient';

  constructor(httpClient:HttpClient){
    httpClient.get("https://localhost:44392/api/test").subscribe();
  }
}
