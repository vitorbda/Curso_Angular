import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  constructor(){}
  ngDoCheck(): void {
    this.taskList.sort((first, last) => 
      Number(first.checked) - Number(last.checked)
    );
  }

  public taskList: Array<TaskList> = [];

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteAll(){
    const confirm = window.confirm("Você realmente deseja deletar a lista?");

    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia. Deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }
}
