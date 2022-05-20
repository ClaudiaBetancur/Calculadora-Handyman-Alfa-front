import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {


  private API_REGISTRAR = "http://localhost:8080/technicalRequest";

  constructor(private http: HttpClient) { }

  public getRegistro(data:any): Observable<any>{
    return this.http.post(this.API_REGISTRAR,data);

  }

}
