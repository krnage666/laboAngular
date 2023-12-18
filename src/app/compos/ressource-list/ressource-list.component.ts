// ressource-list.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RessourceService, Ressource } from '../../shared/services/ressource.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.css']
})
export class RessourceListComponent implements OnInit, OnDestroy {
  ressources: Ressource[] = [];
  private ressourcesSubscription: Subscription = new Subscription();

  constructor(private router: Router, private ressourceService: RessourceService) {}

  ngOnInit() {
    this.ressourcesSubscription = this.ressourceService.getRessources().subscribe(ressources => {
      this.ressources = ressources;
    });
  }

  ngOnDestroy() {
    this.ressourcesSubscription.unsubscribe();
  }

  viewRessourceDetails(ressource: Ressource) {
    this.router.navigate(['/detail', ressource.titre]);
  }

  editRessource(ressource: Ressource) {
    this.router.navigate(['/edit', ressource.titre]);
  }

  deleteRessource(ressource: Ressource) {
    this.ressourceService.deleteRessource(ressource);
  }
}
