import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent  {
   @Input() valor: 1|2|3|4|5;
}
