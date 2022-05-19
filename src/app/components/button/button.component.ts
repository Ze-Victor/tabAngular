import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Button {
  textButton: string;
}

@Component({
  selector: 'app-button',
  template: `
    <button (click)="onSelection.emit()">
      {{ textButton }}
    </button>
  `,
  styles: [
    `
      button {
        margin-right: 10px;
        background-color: #ccc;
        border: 1px solid rgb(118, 118, 118);
        border-radius: 3px;
        padding: 2px 5px;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() textButton!: string; // opções da questão
  @Output() onSelection = new EventEmitter<number>(); // quando o usuário selecionar uma opção, passa seu índice
}
