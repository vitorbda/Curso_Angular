import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../modules/food-list';

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

  private url: string = "http://localhost:3000/"; //list-food

  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList(): Observable<FoodList>{
    return this.http.get<FoodList>(`${this.url}list-food`)
                    .pipe(
                      res => res,
                      error => error
                    )
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }
}
