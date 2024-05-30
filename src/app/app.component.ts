import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'case-labels';

  name = signal<string>('BSLS/IEG/TEST');

  fourLetterCode = computed(() => {
    const items = this.name().split('/');
    return items[items.length - 1];
  });

  fontSize = computed(() => {
    const length = this.name().length;
    if (length > 10) {
      return 28
    } else if (length > 4) {
      return 34
    } else {
      return 40;
    }
  })

  division = computed(() => {
    const items = this.name().split('/');
    if (items.length > 1) {
      return items.slice(0, -1).join('/') + '/';
    } else {
      return '';
    }
  });


}
