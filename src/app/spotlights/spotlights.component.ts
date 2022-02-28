import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';

export interface Spotlights {
  header: string;
  content: string;
  image: string;
}
@Component({
  selector: 'spotlights',
  templateUrl: './spotlights.component.html',
  styleUrls: ['./spotlights.component.scss'],
})
export class SpotlightsComponent {
  @Input() spotlights: Spotlights[];

  constructor(private modalService: ModalService) {}

  showModal(): void {
    this.modalService.modalVisible = true;
  }
}
