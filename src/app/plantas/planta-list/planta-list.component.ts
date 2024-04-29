import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';


@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalDePlantas = 0; 

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  contarPlantasInterior(): number {
    return this.plantas.filter(planta => planta.tipo === 'Interior').length;
  } 
  
  contarPlantasExterior(): number {
    return this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
