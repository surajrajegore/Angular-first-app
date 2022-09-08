import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello World";
  imgUrl = "./assets/bridgelabz.png"
  imgAlt = "this is the bridgelabz logo"
  imgTitle = "bridgelabz"
  ngOnInit():void{
    this.title = "Hello from BridgeLabz.";
  }
}
