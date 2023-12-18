// ressource-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService, Ressource } from '../../shared/services/ressource.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { urlValidator } from './url.validator'; 

@Component({
  selector: 'app-ressource-form',
  templateUrl: './ressource-form.component.html',
  styleUrls: ['./ressource-form.component.css']
})
export class RessourceFormComponent implements OnInit {
  ressourceForm!: FormGroup;
  ressource: Ressource = {
    titre: '',
    description: '',
    dateAjout: new Date()
  };
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
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
          this.isEditMode = true;
        }
      }
      this.initForm();
    });
  }

  private initForm() {
    const urlControl = this.formBuilder.control('', [Validators.pattern('https?://.+'), urlValidator()]);

    this.ressourceForm = this.formBuilder.group({
      titre: [this.ressource.titre, Validators.required],
      description: [this.ressource.description, Validators.required],
      url: [this.ressource.url, urlControl],
      dateAjout: [this.ressource.dateAjout, Validators.required]
    });
  }

  saveRessource() {
    if (this.ressourceForm.invalid) {
      console.log('Le formulaire est invalide. Impossible de sauvegarder la ressource.');
    } else {
      const ressource: Ressource = {
        titre: this.ressourceForm.value.titre,
        description: this.ressourceForm.value.description,
        url: this.ressourceForm.value.url,
        dateAjout: this.ressourceForm.value.dateAjout
      };

      if (this.isEditMode) {
        this.ressourceService.updateRessource(ressource);
      } else {
        this.ressourceService.addRessource(ressource);
      }

      this.router.navigate(['/']);
    }
  }
}
