import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from "../../environments/environment";
import {Material} from "../domain/material";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }

  public getMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>(`${environment.apiURL}material/allMaterials`);
  }

  public addMaterial(material: Material): Observable<Material>{
    return this.http.post<Material>(`${environment.apiURL}/material/addMaterial`, material);
  }

  public updateMaterial(material: Material): Observable<Material>{
    return this.http.put<Material>(`${environment.apiURL}/material/updateMaterial`, material);
  }

  public deleteMaterial(materialId: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiURL}/material/updateMaterial/${materialId}`);
  }
}
