import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestigacaoService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'investigacao';

  getTipoDocumentos(): Observable<any> {
    return this.http.get( this.apiUrl + '/realizar-investigacao')
      .pipe();
  }
}
