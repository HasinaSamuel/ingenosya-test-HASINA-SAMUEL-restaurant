import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AbstactService {
  protected _baseURL = environment.baseURL;

    protected _httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    constructor(protected _http: HttpClient) { }

    async handleError(error: HttpErrorResponse, displayError: boolean = false) {
        // Extract the message

        let serverError: any;

        let message = "Server error occured";
        let status = -1; // -1 : Error is not from business logic
        let value;

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            message = 'A server error occurred: ' + error.error.message
        } else {
            serverError = error.error as ServerError

            if (serverError && serverError.message) {

                message = serverError.message;
                status = serverError.status;
                value = serverError.value;
            } else {

                if (error.status == 504) {
                    message = "Server is not responding"
                }
                else {
                    message = `Backend returned code ${error.status}, ` +
                        `body: ${error.error?.error?.message || error.error?.message || 'empty'}`
                }
            }
        }

        if (!serverError.message  ) {
            if(displayError == true) {
            // const alert = await this._alertController.create({
            //     header: 'Error occured',
            //     subHeader: 'Something wrong happened... Please try again later.',
            //     message: message,
            //     buttons: ['OK']
            // });

            // await alert.present();
            }
        }

        return new ServerError(message, status, value);

    };

    get baseURL(): string {
        return this._baseURL;
    }

    get httpOptions() {
        return this._httpOptions;
    }


}

export class ServerError {

    constructor(public message: string, public status: number, public value : any) { }

}

