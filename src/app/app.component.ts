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

  url = "https://bridgelabz.com/"
  ngOnInit():void{
    this.title = "Hello from BridgeLabz.";
  }
  onClick($event:any){
    console.log("image is clicked",$event)
    window.open(this.url,"_blank")
  }
}
