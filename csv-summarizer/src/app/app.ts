import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummaryComponent } from './components/summary/summary';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SummaryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('csv-summarizer');
}
