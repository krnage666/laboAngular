// ressource-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService, Ressource } from '../../shared/services/ressource.service';

@Component({
  selector: 'app-ressource-form',
  templateUrl: './ressource-form.component.html',
  styleUrls: ['./ressource-form.component.css']
})
export class RessourceFormComponent implements OnInit {
  ressource: Ressource = {
    titre: '',
    description: '',
    dateAjout: new Date()
  };
  isEditMode: boolean = false; // Ajout de la variable pour suivre le mode d'édition

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
          this.isEditMode = true; // La ressource existe, donc on est en mode édition
        }
      }
    });
  }

  saveRessource() {
    if (this.isEditMode) {
      // Mode édition : appeler la méthode de mise à jour
      this.ressourceService.updateRessource(this.ressource);
    } else {
      // Mode ajout : appeler la méthode d'ajout
      this.ressourceService.addRessource(this.ressource);
    }

    // Rediriger vers la liste des ressources
    this.router.navigate(['/']);
  }
}
