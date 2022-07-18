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
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 8px;
        border: none;
        background: gray;
        margin-left: 3px;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() textButton!: string; // opções da questão
  @Output() onSelection = new EventEmitter<number>(); // quando o usuário selecionar uma opção, passa seu índice
}
