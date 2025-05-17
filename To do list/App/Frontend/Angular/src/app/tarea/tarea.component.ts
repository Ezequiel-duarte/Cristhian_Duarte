import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  title = 'pepe';
  description = 'hacerpansito';
  estado?: number;

}