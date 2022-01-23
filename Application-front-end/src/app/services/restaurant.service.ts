import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders,HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry,first, map, tap } from 'rxjs/operators';
import { Ingredient } from '../interface/Ingredient';
import { AbstactService, ServerError } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends AbstactService {

  // Store ActionIngredient
  private actionIngredient: BehaviorSubject<string> = new BehaviorSubject("");
  currentActionIngredient = this.actionIngredient.asObservable();

  // Store Edit Ingredient 
  private editIngredient: BehaviorSubject<Ingredient> = new BehaviorSubject({});
  currentEditIngredient = this.editIngredient.asObservable();

  // Store List Ingredient 
  private listIngredient: BehaviorSubject<any> = new BehaviorSubject(undefined);
  currentListIngredient = this.listIngredient.asObservable();

  constructor( 
    protected httpClient: HttpClient
    ) {
      super(httpClient);
   }


   /* ###################       Store Ingredient  ############################## */

    setActionIngredient(data: string) {
      this.actionIngredient.next(data);
    }

    setEditIngredient(data: Ingredient) {
      this.editIngredient.next(data);
    }

    setListIngredient(data: Ingredient[]) {
      this.listIngredient.next(data);
    }


  /*   ##################       API Ingredient    ###############################  */
 

  getIngredientList(): Observable<any> {
    return this.httpClient
    .get(this.baseURL+'/gestion_restaurant/public/list-ingredient', 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  addIngredient(paramIngredient: Ingredient): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/add-ingredient', paramIngredient,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  updateIngredient(paramIngredient: Ingredient): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/update-ingredient', paramIngredient,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  deleteIngredient(paramIngredient: Ingredient): Observable<any> {
    return this.httpClient
    .post(this.baseURL+'/gestion_restaurant/public/delete-ingredient', paramIngredient,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }



}
