import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {
  myImage:string = "../assets/resources/HANDYMAN.png"
  constructor() { }

  ngOnInit(): void {
  }

}
