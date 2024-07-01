import { Component, Input } from '@angular/core'

@Component({
  selector: 'hello2',
  template: `<h1>Hello {{ name }}!</h1>`,
  styles: [`h1 {
    font-family: Lato, sans-serif
  }`]
})

export class Hello2Component {
  @Input() name: string

  ngOnInit() {
    console.log('Hello init')
  }

  ngOnDestroy() {
    console.log('Hello destroy')
  }
}
