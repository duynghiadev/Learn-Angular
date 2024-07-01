import { Component, OnInit, VERSION } from '@angular/core'

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  name = 'Angular ' + VERSION.major
  show = false

  user = {
    name: 'John Doe',
    age: 23
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
