import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
import { CrearTareaComponent } from '../crear-tarea/crear-tarea.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterOutlet,TareaComponent,CrearTareaComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
mostrarModal = false;
abrirModal() {
  this.mostrarModal = true;
}
agregarTarea(i : number) {
 

}


}
