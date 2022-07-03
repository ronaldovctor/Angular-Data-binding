import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  options: string[] = ["One", "Two", "Three"]
  colors: string [] = ['primary', 'warn', 'accent']
  idx: number = 0

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      this.idx = (this.idx + 1) % this.colors.length
    }, 1500)
  }

}
