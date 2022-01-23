import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Menus } from 'src/app/interface/Menus';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-menus-modal-delete',
  templateUrl: './menus-modal-delete.component.html',
  styleUrls: ['./menus-modal-delete.component.css']
})
export class MenusModalDeleteComponent implements OnInit {

  public deleteMenu: Menus= {};

  constructor(private menusService:MenusService,private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.menusService.currentEditMenus.subscribe((res: any) => { this.deleteMenu = res;  });
  }

  public procValidDelete() {
    let deleteMenu = { IdMenu: this.deleteMenu.IdMenu };
    this.menusService.deleteMenus(deleteMenu).subscribe((res: any) => {
      console.log(res);
      this.get_list();
    } );
    this.dialogRef.closeAll();
  }

  public procCancelDelete() {
    
  }

  public get_list(){
    this.menusService.getMenusList().subscribe((response => {
      this.menusService.setListMenus(response.menu);
    }));
  }

}
