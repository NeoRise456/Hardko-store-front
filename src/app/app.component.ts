import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainHeaderComponent} from './public/components/main-header/main-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hardko-store-front';

  ngOnInit() {

  }

}
