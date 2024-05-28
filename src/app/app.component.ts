import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'case-labels';

  name = signal<string>('');
  fourLetterCode = computed(()=>
  {
    const items = this.name().split('/');
    return items[items.length - 1];
  });

  division =  computed(()=>
    {
      const items = this.name().split('/');
      if(items.length>1) {
        return items.slice(0, -1).join('/') + '/';
      }
      else
      {
        return '';
      }
    });


}
