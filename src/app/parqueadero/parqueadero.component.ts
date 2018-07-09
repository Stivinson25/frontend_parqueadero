import { Component, OnInit } from '@angular/core';

import { ParqueaderoService } from "./parqueadero.service";
import { FichaVehiculoModel } from "./../modelos/ficha-vehiculo.model";

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css'],
  providers: [ParqueaderoService]
})
export class ParqueaderoComponent implements OnInit {
  private vehiculos:Array<FichaVehiculoModel>
  constructor(private parqueaderoService: ParqueaderoService) { }
  ngOnInit() {
    this.loadVehiculos();
  }

  private loadVehiculos(): void{
    this.parqueaderoService.getVehiculos().subscribe(res=>{
      this.vehiculos = res;
      console.log(res);
    });
}
}
