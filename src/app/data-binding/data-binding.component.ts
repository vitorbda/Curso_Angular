import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "João";
  public idade: number = 20;

  public checkedDisabled: boolean = false;

  public alertaInfo(){
    alert("OK!");
  }

  public mouseMoveTeste(valor: MouseEvent){
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  public position: {x: number, y: number} = {x: 0, y: 0}

  constructor() {}

  ngOnInit(): void {
  }


}
