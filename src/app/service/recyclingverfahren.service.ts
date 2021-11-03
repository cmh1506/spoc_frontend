import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recyclingverfahren} from "../domain/recyclingverfahren";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecyclingverfahrenService {

  constructor(private http: HttpClient) { }

  public getRecyclingverfahrens(): Observable<Recyclingverfahren[]>{
    return this.http.get<Recyclingverfahren[]>(`${environment.apiURL}recyclingverfahren/allRecyclingverfahrens`);
  }

  public addRecyclingverfahren(recyclingverfahren: Recyclingverfahren): Observable<Recyclingverfahren>{
    return this.http.post<Recyclingverfahren>(`${environment.apiURL}/recyclingverfahren/addRecyclingverfahren`, recyclingverfahren);
  }

  public updateRecyclingverfahren(recyclingverfahren: Recyclingverfahren): Observable<Recyclingverfahren>{
    return this.http.put<Recyclingverfahren>(`${environment.apiURL}/recyclingverfahren/updateRecyclingverfahren`, recyclingverfahren);
  }

  public deleteRecyclingverfahren(recyclingverfahrenId: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiURL}/recyclingverfahren/updateRecyclingverfahren/${recyclingverfahrenId}`);
  }
}
