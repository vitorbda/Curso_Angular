import { Component, OnChanges, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{
  ngOnDestroy(): void {
    console.log("Foi destruído!");
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso.");
  }

  @Input() public title: string = "Bem vindo";
}
