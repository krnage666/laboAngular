import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './compos/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageUploadComponent } from './compos/image-upload/image-upload.component.spec';
import { NavBarComponent } from './compos/nav-bar/nav-bar.component';
import { RessourceDetailComponent } from './compos/ressource-detail/ressource-detail.component';
import { RessourceFormComponent } from './compos/ressource-form/ressource-form.component';
import { RessourceListComponent } from './compos/ressource-list/ressource-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageUploadComponent,
    NavBarComponent,
    RessourceDetailComponent,
    RessourceFormComponent,
    RessourceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
