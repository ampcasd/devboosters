import { Component, Input } from '@angular/core';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  @Input() features: any[];
}
