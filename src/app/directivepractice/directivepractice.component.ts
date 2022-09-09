import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivepractice',
  templateUrl: './directivepractice.component.html',
  styleUrls: ['./directivepractice.component.css']
})
export class DirectivepracticeComponent implements OnInit {

  isFirstName = false;
  firstNameCreationStatus = "Name is Not Entered "
  firstName = "Suraj"
  nameCreated  = false;
  name = "Suraj"

  names = ['suraj','kapil','samir']
  constructor() { 
    setTimeout(()=> {
      this.isFirstName = true;
    },2000);
  }

  ngOnInit(): void {
  }
  onCeateFirstName(){
    this.nameCreated = true;
    this.names.push(this.firstName);
    this.firstNameCreationStatus = "first Name entered successfully "
  }


}
