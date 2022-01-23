import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InfoPanelComponent,
    MainContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
