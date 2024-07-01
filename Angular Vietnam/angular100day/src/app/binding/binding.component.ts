import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'Angular ' + VERSION.major;

  // DATA BINDING
  // EVENT BINDING
  user = {
    name: 'Duy Nghia',
    age: 22,
  };

  handler(event) {
    console.log('clicked', event);
  }
}
