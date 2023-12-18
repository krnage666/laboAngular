// url.validator.ts

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;

    if (!value) {
      return null; // Si la valeur est vide, la validation réussit
    }

    try {
      // Vérifiez si l'URL est correctement encodée
      const decodedValue = decodeURIComponent(value);
      // Si l'URL peut être décodée sans erreur, la validation réussit
      return null;
    } catch (error) {
      // Si une erreur de décodage se produit, la validation échoue
      return { invalidUrl: true };
    }
  };
}
