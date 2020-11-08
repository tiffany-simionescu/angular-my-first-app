import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  display = false;
  counter = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.display = !this.display;
    this.counter.push(this.counter.length + 1);
  }

}
