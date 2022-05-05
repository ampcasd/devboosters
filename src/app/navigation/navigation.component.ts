import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  readonly menuItems = [
    { displayValue: 'HOME', path: '/' },
    { displayValue: 'LAUNCHPAD', path: '/launchpad' },
    { displayValue: 'ASSISTANTS', path: '/assistants', },
    { displayValue: 'SOURCING', path: '/sourcing' },
    { displayValue: 'CONTACT', path: '/contact' },
  ];

  navigationBarLocked: boolean;
  hamburgerActive = false;

  isSelected(path: string): boolean {
    return window.location.pathname === path;
  }

  navigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(window.location.pathname);
    this.listenScroll();
  }

  listenScroll(): void {
    const debounce = (fn) => {
      let frame;

      return (...params) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = String(window.scrollY);
      if (window.scrollY > 260) {
        this.navigationBarLocked = true;
      } else {
        this.navigationBarLocked = false;
      }
    };

    document.addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    });

    storeScroll();
  }
}
