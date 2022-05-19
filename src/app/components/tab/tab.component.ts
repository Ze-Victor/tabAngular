import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="tabButtons">
      <app-button
        *ngFor="let tabItem of tab; let i = index"
        [textButton]="tabItem.textButton"
        (onSelection)="select(i)"
      >
      </app-button>
    </div>
    <div class="tabPane">
      <h1>
        {{ tab[currentOption].textPane }}
      </h1>
    </div>
  `,
  styles: [
    `
      .tabButtons {
        width: 800px;
        display: flex;
        justify-content: space-between;
        padding: 30px;
      }
      .tabPane {
        width: 800px;
        height: 200px;
        background-color: #ccc;
        border: solid 2px #000;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class TabComponent {
  tab = [
    {
      textButton: 'Tab 1',
      textPane: 'Texto Tab 1',
    },
    {
      textButton: 'Tab 2',
      textPane: 'Texto Tab 2',
    },
    {
      textButton: 'Tab 3',
      textPane: 'Texto Tab 3',
    },
  ];
  currentQuestion = 0;
  currentOption = 0;

  /** Atualiza a opção selecionada pelo usuário. */
  select(optionIndex: number) {
    console.log('Aqui');
    this.currentOption = optionIndex;
  }
}
