import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './services/note.service';
import { CardService } from './services/card.service';
import { DeckService } from './services/deck.service';
import { MatButtonModule } from '@angular/material/button';
import { CKEditorModule } from 'ng2-ckeditor'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    CKEditorModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule

  ],
  providers: [CardService,DeckService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
