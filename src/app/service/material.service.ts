import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from "../../environments/environment";
import {Material} from "../domain/material";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient,
              private stateService: StateService) { }

  public getMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>(`${environment.apiURL}material/allMaterials`);
  }

  public addMaterial(body: any):  Observable<Material>{
    const headers = this.stateService.headers;
    let url = `${environment.apiURL}material/addMaterial`;
    return this.http.post<Material>(url, body, {headers});
  }

  public updateMaterial(material: Material): Observable<Material>{
    return this.http.put<Material>(`${environment.apiURL}/material/updateMaterial`, material);
  }

  deleteMaterial(id: number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")) });
    let url = `${environment.apiURL}material/delete/` + id;
    return this.http.delete(url, {headers});
  }
}
