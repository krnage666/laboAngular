// ressource.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private ressources: Ressource[] = [];
  private ressourceSubject = new BehaviorSubject<Ressource[]>([]);

  constructor() {
    // Récupérer les ressources depuis la localStorage au démarrage
    const storedRessources = localStorage.getItem('ressources');
    if (storedRessources) {
      this.ressources = JSON.parse(storedRessources);
      this.ressourceSubject.next([...this.ressources]);
    }
  }

  private updateLocalStorage() {
    // Mettre à jour la localStorage avec les ressources actuelles
    localStorage.setItem('ressources', JSON.stringify(this.ressources));
  }

  getRessources() {
    return this.ressourceSubject.asObservable();
  }

  addRessource(ressource: Ressource) {
    this.ressources.push(ressource);
    this.ressourceSubject.next([...this.ressources]);
    this.updateLocalStorage();
  }

  getRessourceByTitre(titre: string): Ressource | undefined {
    return this.ressources.find(ressource => ressource.titre === titre);
  }
  addOrUpdateRessource(ressource: Ressource): void {
    const existingRessource = this.getRessourceByTitre(ressource.titre);

    if (existingRessource) {
      // Mise à jour de la ressource existante
      existingRessource.description = ressource.description;
      existingRessource.url = ressource.url;
      existingRessource.dateAjout = ressource.dateAjout;
    } else {
      // Ajout d'une nouvelle ressource
      this.ressources.push(ressource);
    }
  }
  updateRessource(ressource: Ressource): void {
    const existingRessourceIndex = this.ressources.findIndex(r => r.titre === ressource.titre);

    if (existingRessourceIndex !== -1) {
      // Mise à jour de la ressource existante
      this.ressources[existingRessourceIndex] = { ...ressource };
    }
  }
  deleteRessource(ressource: Ressource): void {
    const index = this.ressources.findIndex(r => r.titre === ressource.titre);
    if (index !== -1) {
      this.ressources.splice(index, 1);
      this.updateLocalStorage();
    }
  }
   editRessource(editedRessource: Ressource) {
    const index = this.ressources.findIndex(ressource => ressource.titre === editedRessource.titre);
    if (index !== -1) {
      this.ressources[index] = editedRessource;
      this.ressourceSubject.next([...this.ressources]);
      this.updateLocalStorage();
    }
  }
  // Implementer la mise à jour, suppression, etc.
}

export interface Ressource {
  titre: string;
  description: string;
  url?: string;
  dateAjout: Date;
  image?: string;
}
