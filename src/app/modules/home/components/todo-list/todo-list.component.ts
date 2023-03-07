import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(){}

  public taskList: Array<TaskList> = [];

  public deleteItemTaskLsit(event: number){
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
}
