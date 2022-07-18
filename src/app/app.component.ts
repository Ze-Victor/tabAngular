import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="appPane">
      <app-formTab></app-formTab>
      <app-tab></app-tab>
    </div>
  `,
  styles: [
    `
      .appPane {
        display: flex;
        gap: 10px;
      }
    `,
  ],
})
export class AppComponent {}
