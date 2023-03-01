import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: any = [
    {nome: "João", idade: 20},
    {nome: "Daniel", idade: 25},
    {nome: "Vânia", idade: 45}
  ];

  public onClickAddList(){
    this.list.push({nome: "Karol", idade: 27});
  }

  public onClickEventList(event: any){
    this.list.splice(event, 1);
  }

  public nome = "joao";

  constructor() {}

  public onClick() {
    if(this.conditionClick){
      this.conditionClick = false;
    }
    else {
      this.conditionClick = true;
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition){
        this.condition = false;
      }
      else {
        this.condition = true;
      }
      
    }, 2000)
  }

}
