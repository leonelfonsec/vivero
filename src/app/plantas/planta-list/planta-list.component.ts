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

      for (let i = 0; i < plantas.length; i++) {
        console.log(plantas[i]); // Imprime cada elemento del arreglo
      }
    });
  }



  ngOnInit() {
    this.getPlantas();
  }

}
