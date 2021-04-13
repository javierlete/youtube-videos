import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent {
  @Input() valor: 1 | 2 | 3 | 4 | 5;
  @Output() clic = new EventEmitter<1 | 2 | 3 | 4 | 5>();

  estrellaClick(num: 1 | 2 | 3 | 4 | 5): void {
    console.log(num);

    this.clic.emit(num);
  }
}
