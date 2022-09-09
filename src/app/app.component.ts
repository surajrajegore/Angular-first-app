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

  userName:string = "";
  userNameError = "";

  url = "https://bridgelabz.com/"
  ngOnInit():void{
    this.title = "Hello from BridgeLabz.";
  }
  onClick($event:any){
    console.log("image is clicked",$event);
    window.open(this.url,"_blank");
  }
  onInput($event:any,){
    console.log("Change Event",$event.data);
    const userNameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(userNameRegex.test(this.userName)){
      this.userNameError="";
      return;
    }
    this.userNameError="Invalid username  "
  }
  isFirstName = false;

}
