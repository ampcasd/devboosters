import { Component, Input } from '@angular/core';

export interface Banner {
  image: string;
  header: string;
  subheader: string;
  redirectionButton: string;
}

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() banner: Banner;
}
