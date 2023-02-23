import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          {{valor}}
          <button (click)="add()">Adicionar</button>
          <app-title *ngIf="destruir"></app-title>
          <br>
          <button (click)="destruirComponent()">Destruir componente</button>
          <router-outlet></router-outlet>          
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  constructor() {}

  public destruir:boolean = true;

  public destruirComponent(){
    this.destruir = false;
  }

  public valor: number = 1;

  public add(): number{
    return this.valor += 1;
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngOnInit(): void {
    console.log(1);
  }
}
