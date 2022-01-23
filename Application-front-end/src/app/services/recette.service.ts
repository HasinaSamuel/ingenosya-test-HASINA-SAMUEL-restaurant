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
export class RecetteService extends AbstactService {

  // Store IngredientNecessaire
  private actionIngredientNecessaire: BehaviorSubject<string> = new BehaviorSubject("");
  currentActionRecette = this.actionIngredientNecessaire.asObservable();

  // Store Edit IngredientNecessaire 
  private editIngredientNecessaire: BehaviorSubject<IngredientNecessaire> = new BehaviorSubject({});
  currentIngredientNecessaire = this.editIngredientNecessaire.asObservable();

  // Store List IngredientNecessaire
  private listIngredientNecessaire: BehaviorSubject<any> = new BehaviorSubject(undefined);
  currentListRecette = this.listIngredientNecessaire.asObservable();

  constructor( 
    protected httpClient: HttpClient
    ) {
      super(httpClient);
   }


   /* ###################       Store IngredientNecessaire  ############################## */

    setActionRecette(data: string) {
      this.actionIngredientNecessaire.next(data);
    }

    setEditRecette(data: Menus) {
      this.editIngredientNecessaire.next(data);
    }

    setListRecette(data: Menus[]) {
      this.listIngredientNecessaire.next(data);
    }


  /*   ##################       API IngredientNecessaire    ###############################  */
 

  recupIngredientNecesseireList(paramMenus: IngredientNecessaire): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/list-menu', paramMenus,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getIngredientNecesseireList(): Observable<any> {
    return this.httpClient
    .get(this.baseURL+'/gestion_restaurant/public/ingredient-necessaire',
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  addIngredientNecesseire(paramIngredientNecesseire: IngredientNecessaire): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/add-menu', paramIngredientNecesseire,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  updateIngredientNecessaire(paramIngredientNecessaire: IngredientNecessaire): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/update-menu', paramIngredientNecessaire,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  deleteIngredientNecessaire(paramIngredientNecessaire: IngredientNecessaire): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/delete-menu', paramIngredientNecessaire,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
