import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders,HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry,first, map, tap } from 'rxjs/operators';
import { AbstactService, ServerError } from './abstract.service';
import { Menus } from '../interface/Menus';
import { IngredientNecessaire } from '../interface/IngredientNecessaire';

@Injectable({
  providedIn: 'root'
})
export class MenusService extends AbstactService {

  // Store Menus
  private actionMenus: BehaviorSubject<string> = new BehaviorSubject("");
  currentActionMenus = this.actionMenus.asObservable();

  // Store view Menus
  private actionView: BehaviorSubject<string> = new BehaviorSubject("");
  currentActionView = this.actionView.asObservable();

  private actionViewId: BehaviorSubject<Menus> = new BehaviorSubject({});
  currentActionViewId = this.actionViewId.asObservable();

  // Store Edit Menus 
  private editMenus: BehaviorSubject<Menus> = new BehaviorSubject({});
  currentEditMenus = this.editMenus.asObservable();

  // Store List Menus
  private listMenus: BehaviorSubject<any> = new BehaviorSubject(undefined);
  currentListMenus = this.listMenus.asObservable();


  constructor( 
    protected httpClient: HttpClient
    ) {
      super(httpClient);
   }


   /* ###################       Store Menus  ############################## */

    setActionMenus(data: string) {
      this.actionMenus.next(data);
    }

    setactionView(data: string) {
      this.actionView.next(data);
    }

    setActionViewId(data: Menus){
      this.actionViewId.next(data);
    }

    setEditMenus(data: Menus) {
      this.editMenus.next(data);
    }

    setListMenus(data: Menus[]) {
      this.listMenus.next(data);
    }


  /*   ##################       API Menus    ###############################  */
 

  getMenusList(): Observable<any> {
    return this.httpClient
    .get(this.baseURL+'/gestion_restaurant/public/list-menu', 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getIngredientNecessaireList(paramMenus: Menus): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/ingredient-necessaire', paramMenus,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  addMenus(paramMenus: Menus): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/add-menu', paramMenus,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  addIngredientNecessaire(paramMenus: IngredientNecessaire): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/add-ingredient-necessaire', paramMenus,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  updateMenus(paramMenus: Menus): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/update-menu', paramMenus,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  deleteMenus(paramMenus: Menus): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/delete-menu', paramMenus,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
