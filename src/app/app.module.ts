import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatDividerModule} from '@angular/material';
import { InvestigacaoService } from './services/investigacao.service'
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule, 
    MatSelectModule, 
    MatFormFieldModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [InvestigacaoService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
