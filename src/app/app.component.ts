import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { isBrowser } from '../isNode';

@Component({
  selector: 'angular-16776-example',
  template: `
      16776 Example
      <router-outlet></router-outlet>
  `,
})
export class AppComponent { }