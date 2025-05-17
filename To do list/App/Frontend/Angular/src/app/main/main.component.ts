import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterOutlet,TareaComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
tareas: { title: string; description: string; estado: number }[] = [];

agregarTarea(i : number) {
  const nuevaTarea = {
    title: 'Tarea ' + (this.tareas.length + 1),
    description: 'Descripción de la tarea',
    estado: i
  };
  this.tareas.push(nuevaTarea);
}
get tareasToDo() {
  return this.tareas.filter(t => t.estado === 1);
}

get tareasDoing() {
  return this.tareas.filter(t => t.estado === 2);
}

get tareasDone() {
  return this.tareas.filter(t => t.estado === 3);
}

}
