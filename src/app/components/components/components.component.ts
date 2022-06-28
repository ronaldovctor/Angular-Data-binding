import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  options: string[] = ["One", "Two", "Three"]

  constructor() { }

  ngOnInit(): void {
  }

}
