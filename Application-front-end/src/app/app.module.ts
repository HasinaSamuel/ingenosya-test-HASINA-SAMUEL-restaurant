import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreparationRepasComponent } from './preparation-repas/preparation-repas.component';
import { MenusComponent } from './menus/menus.component';
import { VentesComponent } from './ventes/ventes.component';
import { IngredientModule } from './ingredient/ingredient.module';
import { MenusModule } from './menus/menus.module';


@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    DashboardComponent,
    PreparationRepasComponent,
    MenusComponent,
    VentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredientModule,
    MenusModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
