import { Component, } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Goku', 'Messi', 'Sherlok', 'Tikatikota']

  heroeborrado: string | undefined  = ''

  borrarHeroe(){
    const heroeborrado: string = this.heroes.shift() || ''
    this.heroeborrado = heroeborrado
    
  }
}
