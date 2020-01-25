import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';

import { MaterialModule } from '@workshop/material';
import { CoreDataModule } from '@workshop/core-data'

@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
