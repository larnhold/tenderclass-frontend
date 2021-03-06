import { Injectable } from '@angular/core';
import { Tender } from '../dtos/tender';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from "@angular/common/http";
import {server_url} from "../config";

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  private backendHost = server_url;

  private recommendationUri: string = this.backendHost + '/web/recommendations';
  private webUri = this.backendHost + "/web"

  constructor(private httpClient: HttpClient) { }

  getRecommendations(dateStr: string): Observable<Tender[]> {
    let params = new HttpParams();
    params = params.set("date", dateStr);
    params = params.set("count", "50");
    return this.httpClient.get<Tender[]>(this.recommendationUri, {params: params} );
  }

  getAll(dateStr: string): Observable<Tender[]> {
      let params = new HttpParams();
      params = params.set("date", dateStr);
      params = params.set("count", "50");
      return this.httpClient.get<Tender[]>(this.webUri, {params: params} );
  }
}
