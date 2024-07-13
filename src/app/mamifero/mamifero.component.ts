import { Component } from '@angular/core';

@Component({
  selector: 'app-mamifero',
  standalone: true,
  imports: [],
  templateUrl: './mamifero.component.html',
  styleUrl: './mamifero.component.css',
})
export class MamiferoComponent {
  titulo = 'Animales mamíferos,';
  descripcion =
    'Dicho de un animal: Del grupo de los vertebrados de temperatura constante cuyo embrión, provisto de amnios y alantoides, se desarrolla casi siempre dentro del seno materno, y cuyas crías son alimentadas por las hembras con la leche de sus mamas. Usado también como sustantivo masculino, en plural como taxón.';
}
