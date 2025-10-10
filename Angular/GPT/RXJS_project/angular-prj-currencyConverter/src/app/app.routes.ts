import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'converter',
    pathMatch: 'full',
  },
  {
    path: 'converter',
    loadComponent: () =>
      import('./currency-converter/currency-converter')
        .then(m => m.CurrencyConverter),
  }
];
