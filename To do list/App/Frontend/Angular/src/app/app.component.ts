import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  template: `<app-main></app-main>`,  // aquí usás el selector de MainComponent
  styleUrls: ['./main/main.component.css']
})
export class AppComponent {
  title = 'pepe';
}
