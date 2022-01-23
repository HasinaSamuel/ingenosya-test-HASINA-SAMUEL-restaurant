import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import { Menus } from 'src/app/interface/Menus';
import { MenusService } from 'src/app/services/menus.service';
import { MenusFormComponent } from '../menus-form/menus-form.component';
import { MenusModalDeleteComponent } from '../menus-modal-delete/menus-modal-delete.component';
import 'jspdf-autotable';

@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.css']
})
export class MenusListComponent implements OnInit {

  public dataSource: any;
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  // @ViewChild('content', {static: false  }) el! : ElementRef
  head =[['No','Nom','Prix']]
  
  public columnsToDisplay = ['id', 'nom','recette','prix','action','Details recette'];
  public expandedElement: any;

  public itemEdit: any;

  public listMenus: any;

  public actionMenus: string = "";
  public editMenus: Menus = {};
  public actionViewId: Menus = {};
  public listMenu: Menus[] = [];
  public actionView: string = "";

  constructor(
    private menusService:MenusService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.menusService.currentActionViewId.subscribe((res) => (this.actionViewId = res));
    this.menusService.currentActionMenus.subscribe((res) => (this.actionMenus = res));
    this.menusService.currentActionView.subscribe((res) => (this.actionView = res));
    this.menusService.currentEditMenus.subscribe((res) => (this.editMenus = res));
    this.menusService.currentListMenus.subscribe((res) => {
    this.listMenu = res; 
    this.dataSource = new MatTableDataSource<Menus>(this.listMenu);    
    this.dataSource.paginator = this.paginator;
  });

  // Get list Menus
  this.menusService.getMenusList().subscribe((response => {
    this.listMenus = response;
    this.dataSource = new MatTableDataSource<Menus>(this.listMenus.menu); 
    this.dataSource.paginator = this.paginator;
  }));
}

 /** 
   * Function Open modal Edit Menus
   * 
   **/
  public openEditMenus(param: any) {
      console.log("Edit ingredient ... ");
      this.menusService.setActionMenus("edit");
      this.menusService.setEditMenus(param);
      const dialogRef = this.dialog.open(MenusFormComponent);
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  /** 
   * Function Open modal Delete Menus
   * 
   **/
   public openDeleteMenus(param: any) {
      console.log("Delete menu ... ");
      this.menusService.setEditMenus(param);
      const dialogRef = this.dialog.open(MenusModalDeleteComponent);
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 
  }

  // genererPDF(){
  //   let pdf=new jsPDF
  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf) =>{
  //       pdf.save("MenuDisponible.pdf")
  //     }
  //   })
// }


genererPDF(){
  var pdf= new jsPDF();
  pdf.setFontSize(18);
  pdf.text('Les menus disponibles',70,8);
  // (pdf as any).autoTable({ html: '#my-table' })
  let array = this.listMenus.menu;
  let array1 =[];
for (let i = 0; i < array.length; i++) {
   let array2 = [array[i].IdMenu, array[i].NomMenu, array[i].PrixUnitMenu];
   array1.push(array2);
   console.log(array[i]);
}

 // console.log(this.listMenus.menu);
  this.dataSource = this.listMenus.menu.IdMenu;
 // console.log(this.listMenus.menu[0].IdMenu);
  (pdf as any).autoTable({
    head: this.head,
    body :array1,
    theme: 'grid'
    
  })
  pdf.save("MenuDisponible.pdf")

  this.get_list();
}

public get_list(){
  this.menusService.getMenusList().subscribe((response => {
    this.menusService.setListMenus(response.menu);
  }));
} 
  
public changeInterface(param: any) {
  this.menusService.setActionViewId(param);
  this.menusService.setactionView("detail");
 
}
}
