import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/modules/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{
  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res =>  this.foodList = res,
      error => error
    );
    
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você adicinou -> ${res.nome}`);
        return this.foodList.push(res);
      }
    );
  }

  constructor(private foodListService: FoodListService){}

  public foodList: Array<FoodList> = [];

}
