import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { FormsModule } from '@angular/forms';
import { IngredientModalDeleteComponent } from './ingredient-modal-delete/ingredient-modal-delete.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    IngredientListComponent,
    IngredientFormComponent,
    IngredientModalDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule
  ],
  exports:[
    IngredientListComponent,
    IngredientFormComponent,
    IngredientModalDeleteComponent
  ]
})
export class IngredientModule { }
