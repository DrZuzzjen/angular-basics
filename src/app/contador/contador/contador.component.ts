import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h2>{{title}}</h2>

    <h3>La base es {{base}}</h3>
    
    <button (click)="acumular(base)">+{{base}}</button>
    
    <span>{{numero}}</span>
    
    <button (click)="acumular(-base)">{{base}}</button>
    `
})

export class ContadorComponent{
    title: string = 'Contador App';

    numero: number = 10000;
  
    base: number = 5
  
    acumular(valor: number){
      this.numero +=valor;
    } 
}