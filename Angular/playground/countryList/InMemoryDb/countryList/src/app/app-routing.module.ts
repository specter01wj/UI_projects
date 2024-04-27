import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
	{
    path: 'europe',
    loadChildren: () => import('./europe/europe.module').then(m => m.EuropeModule)
  },
  {
    path: 'asia',
    loadChildren: () => import('./asia/asia.module').then(m => m.AsiaModule)
  },
  {
    path: 'africa',
    loadChildren: () => import('./africa/africa.module').then(m => m.AfricaModule)
  },
  {
    path: 'oceania',
    loadChildren: () => import('./oceania/oceania.module').then(m => m.OceaniaModule)
  },
];

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
