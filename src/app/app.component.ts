import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgStyle} from "@angular/common";
import {CaseLabelComponent} from "./case-label/case-label.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgStyle, CaseLabelComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lockers Labels Generator';

  labelString = signal('BSLS/IEG/TEST');

  labels = computed(() => {
    return this.extractLines((this.labelString()));
  })


  /**
   *  Split the input text by newline characters to get an array of lines
   * @param text
   */
  extractLines(text: string): string[] {
    return text.split('\n');
  }

}
