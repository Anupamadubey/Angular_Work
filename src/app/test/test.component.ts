import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="Anupama Dubey";
  public isDisabled=false;
  public successClass="text-success";
  public hasError=true;
  public greetings="";
  constructor() { }

  ngOnInit() {
  }

  public onClick(event){
    console.log(event);
    this.greetings="Welcome to angular Anupama";
  }
  public logMessage(value){
    console.log(value);
  }
}
