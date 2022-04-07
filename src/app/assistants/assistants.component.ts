import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss'],
})
export class AssistantsComponent implements OnInit {
  features = [
    {
      image: 'assets/images/job-hunting.png',
      header: 'Job Hunting',
      description:
        'We free you from the hassle related to finding your dream job.',
    },
    {
      image: 'assets/images/feed.png',
      header: 'Feed',
      description:
        'We prepare a personalized feed based on your specialization, vector, and performance.',
    },
    {
      image: 'assets/images/community.png',
      header: 'Community',
      description: 'Get access to the community of ambitious developers.',
    },
    {
      image: 'assets/images/growth-drive.png',
      header: 'Growth Drive',
      description:
        "We make sure you don't plateau  by checking up on you with interview questions tailored to your needs.",
    },
    {
      image: 'assets/images/lab.png',
      header: 'Lab',
      description:
        'Get involved in a side-project with other members of our community.',
    },
    {
      image: 'assets/images/candidate-analysis.png',
      header: 'Candidate Analysis',
      description:
        'Get unbiased reviews of your online image and performance while interviewing.',
    },
  ];

  spotlights = [
    {
      header: 'Career analysis',
      description:
        'First, we determine your needs. We define what should be done to get you the work you want.',
      image: 'assets/images/career-analysis.png',
    },
    {
      header: 'Career management',
      description:
        'Next, we take ownership of driving your growth fast forward. We max out your online presence, talk with recruiters and apply to jobs for you.',
      image: 'assets/images/career-management.png',
    },
    {
      header: 'Retrospections',
      description:
        'After each of your job interviews we do a retro and prepare a summary of what should be done for you to improve.',
      image: 'assets/images/retrospections.png',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
