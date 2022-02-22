import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss'],
})
export class AssistantsComponent implements OnInit {
  features = [
    {
      icon: 'fa-search',
      header: 'Job Hunting',
      description:
        'We free you from the hassle related to finding your dream job.',
    },
    {
      icon: 'fa-newspaper',
      header: 'Feed',
      description:
        'We prepare a personalized feed based on your specialization, vector, and performance.',
    },
    {
      icon: 'fa-users',
      header: 'Community',
      description: 'Get access to the community of ambitious developers.',
    },
    {
      icon: 'fa-rocket',
      header: 'Growth Drive',
      description:
        // tslint:disable-next-line:quotemark
        "We make sure you don't plateau by checking up on you with interview questions tailored to your needs.",
    },
    {
      icon: 'fa-flask',
      header: 'Lab',
      description:
        'Get involved in a side-project with other members of our community.',
    },
    {
      icon: 'fa-user',
      header: 'Candidate Analysis',
      description:
        'Get unbiased reviews of your online image and performance while interviewing.',
    },
  ];

  header = 'Let us focus on your career';
  subHeader = 'While we focus on boosting your career';
  imageUrl = 'assets/images/laptop.png';
  imageDescription = 'Laptop with IDE';

  constructor() {}
  ngOnInit(): void {}
}
