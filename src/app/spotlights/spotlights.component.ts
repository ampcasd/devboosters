import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

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
        'Next, we take ownership of driving your growth fast forward. We max out your online presence, talk with recruiters and apply to jobs for you.',
      image: 'assets/images/management.svg',
    },
    {
      header: 'Retrospections',
      content:
        'After each of your job interviews we do a retro and prepare a summary of what should be done for you to improve.',
      image: 'assets/images/retro.svg',
    },
  ];

  constructor(private modalService: ModalService) { }

  showModal(): void {
    this.modalService.modalVisible = true;
  }
}
