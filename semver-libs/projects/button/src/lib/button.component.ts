import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <p>
      button works!!
    </p>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
