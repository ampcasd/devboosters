import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner/banner.component';

@Component({
  selector: 'sourcing',
  templateUrl: './sourcing.component.html',
  styleUrls: ['./sourcing.component.scss'],
})
export class SourcingComponent implements OnInit {
  spotlights = [
    {
      id: 1,
      header: 'Our People',
      description:
        'Launchpads allow experienced Software Engineers to educate Junior Developers and recap the rewards of that commitement. LauchPads are set up as an on-site office that is run by the mentor as a side gig to their day job.',
      image: '../../assets/images/sourcing-middle-ourpeople.svg',
    },
    {
      id: 2,
      header: 'Our Approach',
      description:
        'Apart from steams created by the dynamics of Launchpads and Assistants, there is a growing number of experienced Software Engineers that are willing to work with us. With the growth of our people, more people are coming.',
      image: 'assets/images/sourcing-middle-ourexperience.svg',
    },
    {
      id: 3,
      header: 'Our Experience',
      description:
        'Launchpads allow experienced Software Engineers to take on the responsibility of educataing Junior Developersand reap the rewards of the commitment. Launchpads are set up as and on-site office that is run by the mentor as a side gig to their day job.',
      image: 'assets/images/sourcing-middle-ourapproach.svg',
    },
  ];
  banner: Banner = {
    image: '../../assets/images/sourcing-top-girl.png',
    header: 'Sourcing',
    subheader: 'We match great people with great companies.',
    redirectionButton: '/sourcing#more',
  };
  constructor() {}

  ngOnInit(): void {}
}
