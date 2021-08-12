import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    { 
      nombre: 'Goku', 
      poder: 9500, 
    },
    { 
      nombre: 'Vegeta', 
      poder: 8500, 
    }
  ]

  



  
}

