import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `     
  
  <app-food-list>

  <router-outlet></router-outlet>          
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  public getDados: any;

  public setDados(event: any){
    this.getDados = event;
  }

  public addValue = 10;

  public add(){
    this.addValue++;
  }

  ngOnInit(): void {    
  }
  
}
