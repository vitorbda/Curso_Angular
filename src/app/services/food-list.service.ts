import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ];

  public emitEvent = new EventEmitter();

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }

  constructor() { }

  public foodList(){
    return this.list;
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }
}
