import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MenusListComponent } from './menus-list/menus-list.component';
import { MenusModalDeleteComponent } from './menus-modal-delete/menus-modal-delete.component';
import { MenusFormComponent } from './menus-form/menus-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MenusDetailComponent } from './menus-detail/menus-detail.component';
import { MenusFormIngredientComponent } from './menus-form-ingredient/menus-form-ingredient.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    MenusFormComponent,
    MenusListComponent,
    MenusModalDeleteComponent,
    MenusDetailComponent,
    MenusFormIngredientComponent
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
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports:[
    MenusListComponent,
    MenusFormComponent,
    MenusModalDeleteComponent,
    MenusDetailComponent,
    MenusFormIngredientComponent
  ]
})
export class MenusModule { }
