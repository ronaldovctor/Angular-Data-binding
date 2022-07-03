import { Component, Input, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  buttonName: string = 'My button'
  i: number = 0
  spinnerMode: ProgressSpinnerMode = 'determinate'
  btnEnable: boolean = true
  selectEnable: boolean = false
  selectedOption!: string
  inputName: string = "Name"

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.buttonName = this.buttonName
  }

  inc(): void {
    this.i++
    this.buttonName = `It was clicked ${this.i} times`
    this.spinnerMode = 'determinate'
  }

  disabled(): void {
    this.btnEnable = false
    this.spinnerMode = 'indeterminate'

    setTimeout(()=> {
      this.btnEnable = true
      this.spinnerMode = 'determinate'
    }, 2000)
  }

  cbChange(e: any): void {
    const state: boolean = e.checked
    this.selectEnable = state
  }

  selectionChange(e: any): void {
    this.selectedOption = e.value
  }
}
