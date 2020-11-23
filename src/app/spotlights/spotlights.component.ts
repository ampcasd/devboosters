import { Component } from '@angular/core';

@Component({
  selector: 'spotlights',
  templateUrl: './spotlights.component.html',
  styleUrls: ['./spotlights.component.scss'],
})
export class SpotlightsComponent {
  readonly spotlights = [
    {
      header: 'Career analysis',
      content:
        'First, we determine your needs. We define what should be done to get you the work you want.',
      image: 'assets/images/analysis.svg',
    },
    {
      header: 'Career management',
      content:
        'Next, we take ownership of driving your growth fast forward. We max out your image, talk with recruiters and apply to jobs for you.',
      image: 'assets/images/management.svg',
    },
    {
      header: 'Retrospections',
      content:
        'After each of your job interviews we do a retro and prepare a summary of what should to be done for you to improve.',
      image: 'assets/images/retro.svg',
    },
  ];
}
