// ressource-list.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ressource, RessourceService } from 'src/app/shared/services/ressource.service';



@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.css']
})
export class RessourceListComponent implements OnInit, OnDestroy {
  ressources: Ressource[] = [];
  private ressourcesSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.ressourcesSubscription = this.ressourceService.getRessources().subscribe(ressources => {
      this.ressources = ressources;
    });
  }



  constructor(private router: Router, private ressourceService: RessourceService) {}


  ngOnDestroy() {
    // N'oubliez pas de désabonner pour éviter les fuites de mémoire
    this.ressourcesSubscription.unsubscribe();
  }

  viewRessourceDetails(ressource: Ressource) {
    // Naviguer vers la page de détails de la ressource en utilisant le titre comme paramètre
    this.router.navigate(['/detail', ressource.titre]);
  }

  editRessource(ressource: Ressource) {
    // Naviguer vers le formulaire de modification avec l'identifiant de la ressource
    this.router.navigate(['/edit', ressource.titre]);
  }
  deleteRessource(ressource: Ressource) {
    // Appeler la méthode deleteRessource du service avec la ressource
    this.ressourceService.deleteRessource(ressource);
    
    // Mise à jour directe de la liste dans le composant après la suppression
    const index = this.ressources.findIndex(r => r.titre === ressource.titre);
    if (index !== -1) {
      this.ressources.splice(index, 1);
    }
  }
}
// ressource-list.component.ts

