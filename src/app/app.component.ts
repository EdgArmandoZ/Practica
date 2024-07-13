import { Component } from '@angular/core';
import { MamiferoComponent } from './mamifero/mamifero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MamiferoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Animales Mamiferos';
}
