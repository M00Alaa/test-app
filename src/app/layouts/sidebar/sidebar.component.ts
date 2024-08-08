/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import MetisMenu from 'metismenujs';
import { EventService } from '../../core/services/event.service';

import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { logo } from 'src/app/app-const';
import {
  AuthenticationService,
  MgApplicationUser,
} from 'src/app/core/services/auth.service';
import { MENU } from './menu';
import { MenuItem } from './menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('componentRef') scrollRef;
  @Input() isCondensed = false;
  menu: any;
  data: any;
  logos = logo;
  routesOptions: IsActiveMatchOptions = {
    fragment: 'ignored',
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'exact',
  };
  menuItems: any[] = [];

  @ViewChild('sideMenu') sideMenu: ElementRef;
  acc: MgApplicationUser | null = null;
  constructor(
    private eventService: EventService,
    private router: Router,
    private auth: AuthenticationService,
    public translate: TranslateService,
    private http: HttpClient,
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });

    auth.currentUserSubject.subscribe({
      next: (res) => {
        this.acc = res;
      },
    });
  }

  ngOnInit() {
    this.initialize();

    this._scrollElement();
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }

  clickElWhenCollapsed() {
    if (document.body.classList.contains('vertical-collpsed')) {
      this._activateMenuDropdown();
    }
  }

  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }

  ngOnChanges() {
    if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
        this._activateMenuDropdown();
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName('mm-active').length > 0) {
        const currentPosition =
          document.getElementsByClassName('mm-active')[0]['offsetTop'];
        if (currentPosition > 500)
          if (this.scrollRef.SimpleBar !== null)
            this.scrollRef.SimpleBar.getScrollElement().scrollTop =
              currentPosition + 300;
      }
    }, 300);
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl: any = null;
    // tslint:disable-next-line: prefer-for-of
    const paths: any[] = [];
    let itemIndex = -1;
    for (let i = 0; i < links.length; i++) {
      paths.push(links[i]['pathname']);
      const linkTypeParam = new URLSearchParams(links[i]['search']).get('type');
      const projectTypeParam = new URLSearchParams(window.location.search).get(
        'type',
      );
      if (!linkTypeParam) {
        if (window.location.pathname.startsWith(links[i]['pathname'])) {
          itemIndex = i;
        }
      } else {
        if (
          window.location.pathname.startsWith(links[i]['pathname']) &&
          linkTypeParam === projectTypeParam
        ) {
          itemIndex = i;
        }
      }
    }

    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) {
              childAnchor.classList.add('mm-active');
            }
            if (childDropdown) {
              childDropdown.classList.add('mm-active');
            }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') {
                  childanchor.classList.add('mm-active');
                }
              }
            }
          }
        }
      }
    }
  }

  /**
   * Initialize
   */
  initialize(): void {
    this.menuItems = MENU;
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Logout the user
   */
  logout() {
    this.auth.logout();
    this.router.navigate(['/account/login']);
  }
}
