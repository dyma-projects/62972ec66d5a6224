import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  public result: number = 0;
  @Output() newResult: EventEmitter<number> = new EventEmitter();
  updateCompteur(i: number) {
    this.result = this.result + i;
    this.newResult.emit(this.result);
  }
  constructor() { }

  ngOnInit() {
  }

}
