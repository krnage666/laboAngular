// ressource-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressource, RessourceService } from 'src/app/shared/services/ressource.service';

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

  saveRessource() {
    // Ajouter ou mettre à jour la ressource
    if (this.ressource.titre) {
      this.ressourceService.addOrUpdateRessource(this.ressource);

      // Rediriger vers la liste des ressources
      this.router.navigate(['/']);
    }
  }
}
