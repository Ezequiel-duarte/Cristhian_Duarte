import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent {
   tareaNombre: string = '';
  tareaDescripcion: string = '';
  crearTarea() {
    console.log('Nombre:', this.tareaNombre);
    console.log('Descripción:', this.tareaDescripcion);
    // Podés emitir un evento, agregar a una lista, etc.
  }
}
