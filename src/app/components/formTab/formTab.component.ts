import { Component } from '@angular/core';

@Component({
  selector: 'app-formTab',
  template: `
    <div class="formPane">
      <form>
        <label class="labelText">Num. Tabs: </label>
        <input type="number" class="inputText" />
      </form>
      <div class="separator"></div>
      <form class="formContent">
        <label class="labelText">Título: </label>
        <input type="text" class="inputText" />

        <label class="labelText">Conteúdo: </label>
        <input type="text" class="inputText" />

        <div class="separator"></div>
      </form>
    </div>
  `,
  styles: [
    `
      .formPane {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        gap: 8px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        width: 500px;
        min-height: 300px;
      }

      .formContent {
        display: flex;
        flex-direction: column;
      }

      .inputText {
        width: 400px;
        height: 32px;
        border: 1px solid black;
        border-radius: 4px;
      }
      .labelText {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
      }

      .separator {
        margin: 10px 0;
        width: 400px;
        height: 0px;

        border: 1px solid #a5a5a5;
      }
    `,
  ],
})
export class FormTabComponent {
  /** Atualiza a opção selecionada pelo usuário. */
  select(optionIndex: number) {
    console.log('Aqui');
  }
}
