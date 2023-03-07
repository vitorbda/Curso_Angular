import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(){}

  @Output() public emitItemTaskList = new EventEmitter();
  
  public addItemTaskList: string = "";

  public submitTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
