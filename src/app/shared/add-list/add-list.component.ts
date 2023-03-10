import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private foodListService: FoodListService){}

  public listAddItem(value: string){
    return this.foodListService.foodListAdd(value);
  }

}
