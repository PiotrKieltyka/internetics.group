import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div class="py-16" data-aos="fade-up" data-aos-duration="1000">
      <img
        class="transform rounded-2xl shadow-2xl transition duration-500 hover:scale-105"
        src="{{ imageSource }}"
        loading="lazy"
        alt="{{ imageAlt }}"
      />
    </div>
  `,
  styles: [],
})
export class ExampleComponent {
  @Input() imageSource: string = '';
  @Input() imageAlt: string = '';
}
