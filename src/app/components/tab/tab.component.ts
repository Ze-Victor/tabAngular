import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="tabPane">
      <div class="tabButtons">
        <app-button
          *ngFor="let tabItem of tab; let i = index"
          [textButton]="tabItem.textButton"
          (onSelection)="select(i)"
        >
        </app-button>
      </div>
      <div class="tabEnunciation">
        <h1>
          {{ tab[currentOption].textPane }}
        </h1>
      </div>
    </div>
  `,
  styles: [
    `
      .tabButtons {
        width: 490px;
        display: flex;
        margin: 5px;
      }
      .tabPane {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 500px;
        height: 300px;
        padding: 24px;
        gap: 8px;
        background: #ffffff;
        /* Shadow / 6 */

        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
      }
      .tabEnunciation {
        margin-top: 30px;
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
