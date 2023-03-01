import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(){}

  @Output() public enviarDados = new EventEmitter();

  public getDados(event: any){
    this.enviarDados.emit(this.list[event]);
  }

  public list: any[] = [
    {nome: "João", idade: 20},
    {nome: "Daniel", idade: 25},
    {nome: "Vânia", idade: 45}
  ];

}
