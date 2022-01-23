import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreparationRepasComponent } from './preparation-repas/preparation-repas.component';
import { MenusComponent } from './menus/menus.component';
import { VentesComponent } from './ventes/ventes.component';


const routes: Routes = [
  {
    path : 'ingredient',
    component: IngredientComponent
  },    
  // {
  //   path : 'dashboard',
  //   component: DashboardComponent
  // },
  {
    path : 'preparation-repas',
    component: PreparationRepasComponent
  },
  {
    path : 'menus',
    component: MenusComponent
  },
  {
    path : 'ventes',
    component: VentesComponent
  },
  {
    path : '',
    redirectTo: '/ingredient',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)          
  
  ],
  exports: [RouterModule,    
    MatToolbarModule,
     BrowserModule,
        BrowserAnimationsModule,
     MatSidenavModule,
    MatButtonModule,
     MatIconModule,
     MatDividerModule 
        
  ]
})
export class AppRoutingModule { }
