import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{
  ngOnInit(): void {
    setInterval(()=>{
      if(this.tamanho == "20px"){
        this.tamanho = "50px";
        this.cor = "black";
      } else {
        this.tamanho = "20px";
        this.cor = "yellow";
      }
    }, 2000)
  }

  constructor(){}

  public salvar(){
    this.list.push({nome: this.nome});
  }

  public date: Date = new Date();

  public valor = true;
  public tamanho = "20px";
  public cor = "yellow";
  public nome = "";
  public list = [{nome: ""}];

    public mudar() {
    if(this.valor){
      this.valor = false;
    } else {
      this.valor = true;
    }
  }

}
