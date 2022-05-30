import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner/banner.component';

@Component({
  selector: 'launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss'],
})
export class LaunchpadComponent implements OnInit {
  banner: Banner = {
    image: 'assets/images/laptop.png',
    header: 'Launchpad',
    subheader: 'A place for growth.',
    redirectionButton: 'launchpad#how-it-works',
  };
  constructor() {}

  ngOnInit(): void {}
}
