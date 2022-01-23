import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Menus } from 'src/app/interface/Menus';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-menus-form',
  templateUrl: './menus-form.component.html',
  styleUrls: ['./menus-form.component.css']
})
export class MenusFormComponent implements OnInit {
  // Property | can use reactive form
  editMenusId: number = 0;
  name: string = "";
  recette: string = "";
  price: number = 0;

  public actionMenus: string = "";
  public editMenus: Menus = {};
  public listMenus: Menus[] = [];


  constructor(private menusService:MenusService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.menusService.currentActionMenus.subscribe((res) => {
      this.actionMenus = res;
      console.log(res);
      if(res == "add"){
        setTimeout(() => {
          this.name = "";
          this.recette = "";
          this.price = 0;
        }, 100);
      }
    });
    this.menusService.currentEditMenus.subscribe((res: any) => {
      this.editMenus = res;
      try {
        this.name = res.NomMenu;
        this.recette = res.NomRecette;
        this.price = res.PrixUnitMenu;
      } catch (error) {
        
      }
      
    });
    this.menusService.currentListMenus.subscribe((res) => (this.listMenus = res));
  }

  public clickCancelForm() {
    this.menusService.setActionMenus("");
  }

  public procAddMenus() {
    let newIngredient: Menus = {
      NomMenu: this.name,
      NomRecette: this.recette,
      PrixUnitMenu: this.price
    };
    this.menusService.addMenus(newIngredient).subscribe(res => {
      console.log(res);
      this.get_list();
    });
    this.dialogRef.closeAll();
  }

  public procUpdateMenus() {

    let editIngredient: Menus = {
      IdMenu: this.editMenus.IdMenu,
      NomMenu: this.name,
      NomRecette: this.recette,
      PrixUnitMenu: this.price
    };
    this.menusService.updateMenus(editIngredient).subscribe(res => {
      console.log(res);
      this.get_list();
    });
    this.dialogRef.closeAll();
  }

  public get_list(){
    this.menusService.getMenusList().subscribe((response => {
      this.menusService.setListMenus(response.menu);
    }));
  }
}
