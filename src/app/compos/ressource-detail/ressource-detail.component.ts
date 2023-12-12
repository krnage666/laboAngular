// ressource-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressource, RessourceService } from 'src/app/shared/services/ressource.service';

@Component({
  selector: 'app-ressource-detail',
  templateUrl: './ressource-detail.component.html',
  styleUrls: ['./ressource-detail.component.css']
})
export class RessourceDetailComponent implements OnInit {
  ressource: Ressource | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ressourceService: RessourceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const titre = params.get('titre');
      if (titre) {
        const existingRessource = this.ressourceService.getRessourceByTitre(titre);
        if (existingRessource) {
          this.ressource = { ...existingRessource };
        }
      }
    });
  }

  goToRessourceList() {
    // Naviguer vers la liste des ressources
    this.router.navigate(['/']);
  }
  editRessource() {
    // Naviguer vers le formulaire de modification avec le titre comme paramètre
    this.router.navigate(['/edit', this.ressource?.titre]);
  }

  deleteRessource() {
    // Supprimer la ressource et revenir à la liste des ressources
    if (this.ressource?.titre) {
      this.ressourceService.deleteRessource(this.ressource);
      this.router.navigate(['/']);
    }
  }
}
