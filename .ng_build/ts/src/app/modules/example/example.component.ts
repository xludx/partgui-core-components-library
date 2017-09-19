import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'partlib-example',
  template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
