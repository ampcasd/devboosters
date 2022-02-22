import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() header: string;
  @Input() subHeader: string;
  @Input() imageUrl: string;
  @Input() imageDescription: string;

  constructor() {}

  ngOnInit(): void {}
}
