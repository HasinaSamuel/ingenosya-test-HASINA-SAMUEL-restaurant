import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IngredientNecessaire } from 'src/app/interface/IngredientNecessaire';
import { Menus } from 'src/app/interface/Menus';
import { MenusService } from 'src/app/services/menus.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-menus-form-ingredient',
  templateUrl: './menus-form-ingredient.component.html',
  styleUrls: ['./menus-form-ingredient.component.css']
})
export class MenusFormIngredientComponent implements OnInit {
  idIngredient: number = 0;
  quantite: number = 0;

  public listIngredients: any;

  public actionViewId: Menus = {};

  constructor(private menusService:MenusService,private dialogRef: MatDialog,private restaurantService:RestaurantService,) { }

  ngOnInit(): void {
      this.menusService.currentActionViewId.subscribe((res) => (this.actionViewId = res));
      this.restaurantService.getIngredientList().subscribe((response => {
        this.listIngredients = response.ingredient;
        console.log(this.actionViewId);
      }));
    
  }

  public clickCancelForm() {
  }

  public procAddIngredientNecessaire() {
    let newIngredientNecessaire: IngredientNecessaire = {
        IdIngredient: this.idIngredient,
        IdMenu: this.actionViewId.IdMenu,
        Quantite: this.quantite
    };
    this.menusService.addIngredientNecessaire(newIngredientNecessaire).subscribe(res => {
      this.get_list();
    });
    this.dialogRef.closeAll();
    console.log(this.idIngredient);

  }

  public get_list(){
    this.menusService.getMenusList().subscribe((response => {
      this.menusService.setListMenus(response.menu);
    }));

    let IdMenu: Menus = {
      IdMenu: this.actionViewId.IdMenu
    };
      this.menusService.getIngredientNecessaireList(IdMenu).subscribe((response => {
      this.menusService.setListMenus(response.ingredient_necessaire);
    }));
  }

}
