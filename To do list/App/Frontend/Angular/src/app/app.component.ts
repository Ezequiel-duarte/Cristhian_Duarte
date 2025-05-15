import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './main/main.component.html',
  styleUrl: './main/main.component.css'
})
export class AppComponent {
  title = 'pepe';
}
