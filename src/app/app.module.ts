import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TabComponent } from './components/tab/tab.component';
import { FormTabComponent } from './components/formTab/formTab.component';

@NgModule({
  declarations: [AppComponent, TabComponent, ButtonComponent, FormTabComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
