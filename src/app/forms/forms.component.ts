import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  constructor(){}

  public submitForm(form: NgForm){
    console.log(form.value);
  }

  public listComidas: Array<{comida: string}> = [
    {comida: "X-salada"},
    {comida: "X-bacon"},
    {comida: "Coxinha"}
  ];

}
