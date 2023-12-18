import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './compos/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageUploadComponent } from './compos/image-upload/image-upload.component.spec';
import { NavBarComponent } from './compos/nav-bar/nav-bar.component';
import { RessourceDetailComponent } from './compos/ressource-detail/ressource-detail.component';
import { RessourceFormComponent } from './compos/ressource-form/ressource-form.component';
import { RessourceListComponent } from './compos/ressource-list/ressource-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageUploadComponent,
    NavBarComponent,
    RessourceDetailComponent,
    RessourceFormComponent,
    RessourceListComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
