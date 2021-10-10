import { Component } from '@angular/core';
import { ExamplesModel } from '../../models/examples.model';
import { ExampleInterface } from '../../models/example.interface';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {
  examples: Array<ExampleInterface> = ExamplesModel;
}
