import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components } from './front-page/components';

@NgModule({
  declarations: [
    AppComponent,components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfJsViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
