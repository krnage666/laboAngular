import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compos/home/home.component';
import { ImageUploadComponent } from './compos/image-upload/image-upload.component.spec';
import { RessourceDetailComponent } from './compos/ressource-detail/ressource-detail.component';
import { RessourceFormComponent } from './compos/ressource-form/ressource-form.component';
import { RessourceListComponent } from './compos/ressource-list/ressource-list.component';
import { AppComponent } from './compos/app/app.component';

const routes: Routes = [
    {path: 'upload', component: ImageUploadComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ressource-list' , component:RessourceListComponent},
    {path: 'ressource-detail' , component:RessourceDetailComponent},
    {path: 'ressource-form' , component:RessourceFormComponent},
    { path: '', component: RessourceListComponent },
    { path: 'detail/:titre', component: RessourceDetailComponent },
    
    { path: 'app', component: AppComponent },
    { path: 'edit/:titre', component: RessourceFormComponent }, // Ajoutez cette ligne
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }