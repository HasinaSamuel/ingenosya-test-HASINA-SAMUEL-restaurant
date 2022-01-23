import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ingredient } from 'src/app/interface/Ingredient';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  // Property | can use reactive form
  editIngredientId: number = 0;
  name: string = "";
  quantite: number = 0;
  unite: string = "";
  price: number = 0;

  public actionIngredient: string = "";
  public editIngredient: Ingredient = {};
  public listIngredient: Ingredient[] = [];



  constructor(private restaurantService:RestaurantService, private dialogRef: MatDialog) {

   }

  ngOnInit(): void {
    this.restaurantService.currentActionIngredient.subscribe((res) => 
    {
      this.actionIngredient = res;
      console.log(res);
      if(res == "add"){
        setTimeout(() => {
          this.name = "";
          this.quantite = 0;
          this.unite = "";
          this.price = 0;
        }, 100);
      }    
    });
    this.restaurantService.currentEditIngredient.subscribe((res: any) => {
      this.editIngredient = res;
      try {
        this.name = res.NomIngredient;
        this.quantite = res.QteStock;
        this.unite = res.Unite;
        this.price = res.Prix_unitaire;
      } catch (error) {
        
      }
      
    });
    this.restaurantService.currentListIngredient.subscribe((res) => (this.listIngredient = res));
  }

  public clickCancelForm() {
    this.restaurantService.setActionIngredient("");
  }

  public procAddIngredient() {
    let newIngredient: Ingredient = {
      NomIngredient: this.name,
      QteStock: this.quantite,
      Unite: this.unite ,
      Prix_unitaire: this.price
    };
    this.restaurantService.addIngredient(newIngredient).subscribe(res => {
      console.log(res);
      this.get_list();
    });
    this.dialogRef.closeAll();
  }


  public procUpdateIngredient() {

    let editIngredient: Ingredient = {
      IdIngredient: this.editIngredient.IdIngredient,
      NomIngredient: this.name,
      QteStock: this.quantite,
      Unite: this.unite ,
      Prix_unitaire: this.price
    };
    this.restaurantService.updateIngredient(editIngredient).subscribe(res => {
      this.get_list();
    });
    this.dialogRef.closeAll();
  }

  public get_list(){
    this.restaurantService.getIngredientList().subscribe((response => {
      this.restaurantService.setListIngredient(response.ingredient);
    }));
  }

}
