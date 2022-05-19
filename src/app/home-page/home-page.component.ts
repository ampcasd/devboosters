import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  perspectiveDesktop = { $implicit: 'perspective-content-desktop' };
  perspectiveMobile = { $implicit: 'perspective-content' };
}
