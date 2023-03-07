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

  public taskList: Array<TaskList> = [
    {task: "Minha task 1", checked: true},
    {task: "minha task 2", checked: false}
  ];
}
