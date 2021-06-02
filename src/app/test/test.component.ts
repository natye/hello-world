import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
                  what is new in angular
                  <h2>{{newa}}</h2></div>
                  <h2>{{newa.length}}</h2>
                  <h1>{{newa.toUpperCase()}}</h1>
                  <h1>{{newangular()}}<br/>
                  {{siteurl}}</h1>
                  <div>Property Bindings
                  <input bind-disabled=IsDisabled type="text" value="component">
                  <input id={{MyId}} type="text" value="component">
                  <input [disabled]="IsDisabled" [id]="MyId" type="text" value="component"></div>
                  `,
  styles:[ `
    div
      {color:red;  
      font-size:34px;}`]
})
export class TestComponent implements OnInit {
public newa="Components";
public siteurl=window.location.href;
public MyId="testId";
public IsDisabled=false;
  constructor() { }

  ngOnInit(): void {
  }
newangular(){return this.newa+" and modules"}
}
