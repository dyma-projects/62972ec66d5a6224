import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  @ViewChild('myinput') public element: ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() { }

  inputChange() {
    this.valeur = this.element.nativeElement.value;
  }

  ngOnInit(): void {
    
  }

}
