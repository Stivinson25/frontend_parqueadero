import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FichaVehiculoModel } from './../modelos/ficha-vehiculo.model'

@Injectable()
export class ParqueaderoService {

  constructor(private http:HttpClient) { }

  public getVehiculos(): Observable<FichaVehiculoModel[]> {
      return this.http.get<FichaVehiculoModel[]>("http://localhost:8088/listarVehiculos");

  }
}
