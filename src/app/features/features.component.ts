import { Component, Input } from '@angular/core';

export interface Feature {
  image: string;
  header: string;
  description: string;
}

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  @Input() features: Feature
}
