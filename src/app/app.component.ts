import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `     
  <!--     
  <app-diretivas-atributos>
    <h1>Aulas de Diretivas e atributos </h1>
    <h3> Final da aula </h3>
  </app-diretivas-atributos>
  <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!-- <app-new-component></app-new-component> -->
  <!-- <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Adicionar</button> -->

  <ng-template [ngIf]="getDados"]> 
    <p> {{getDados.nome}} - {{getDados.idade}}
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>

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
