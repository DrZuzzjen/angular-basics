import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent{
title: string ='Contador app'

    nombre: string ='Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string { 
        return this.nombre.toLocaleUpperCase()
    }

    //Devuelve un html para inyectar
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): string {
        return this.nombre = 'Spiderman'
    }

    cambiarEdad(): number {
        return this.edad = 30
    }


}
