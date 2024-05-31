import {Component, computed, input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-case-label',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './case-label.component.html',
  styleUrl: './case-label.component.css'
})
export class CaseLabelComponent {
  name = input('BSLS/IEG/TEST');

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
