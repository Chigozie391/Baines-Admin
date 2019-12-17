import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, withLatestFrom, filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @ViewChild('drawer', {static: true}) drawer: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    general = [
      {
        icon: 'dashboard',
        route: 'Dashboard',
        url: '/app/dashboard',
        sub: []
      }
    ]; 

    customers = [
      {
        icon: 'group',
        route: 'Users',
        url: '/app/customers/lenders',
        sub: []
      },
      {
        icon: 'group',
        route: 'Borrowers',
        url: '/app/customers/borrowers',
        sub: []
      },
      {
        icon: 'group',
        route: 'Savers',
        url: '/app/customers/savers',
        sub: []
      }
    ]; 


    business = [
      {
        icon: 'loan',
        route: 'Loan products',
        url: '/app/business/loan-product',
        sub: []
      },
      {
        icon: 'loan',
        route: 'Savings products',
        url: '/app/business/loan-product',
        sub: []
      },
      {
        icon: 'loan',
        route: 'Loans',
        url: '/app/business/loan-product',
        sub: []
      },
      {
        icon: 'loan',
        route: 'Savings',
        url: '/app/business/loan-product',
        sub: []
      },
      {
        icon: 'transaction',
        route: 'Transactions',
        url: '/app/business/transactions',
        sub: []
      }
    ]; 
    

    settings = [
      {
        icon: 'group',
        route: 'Account',
        url: '/app/users',
        sub: []
      },
      {
        icon: 'api',
        route: 'Bank Information',
        url: '/app/apis',
        sub: []
      },
      {
        icon: 'audit',
        route: 'Team',
        url: '/app/audits',
        sub: []
      },
      {
        icon: 'audit',
        route: 'Preferences',
        url: '/app/audits',
        sub: []
      },
      {
        icon: 'audit',
        route: 'Audit Logs',
        url: '/app/audits',
        sub: []
      }
    ]; 

    userMenu = [
      {
        icon: 'settings',
        route: 'Settings',
        url: 'Path.SETTINGS',
        sub: []
      },
      {
        icon: 'logout',
        route: 'Logout',
        url: 'Path.LOGOUT',
        sub: []
      }
    ];


  constructor(private breakpointObserver: BreakpointObserver, 
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router) {
      this.matIconRegistry.addSvgIcon('dashboard', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/dashboard.svg'));
      this.matIconRegistry.addSvgIcon('group', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/group.svg'));
      this.matIconRegistry.addSvgIcon('audit', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/file.svg'));
      this.matIconRegistry.addSvgIcon('api', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/api.svg'));
      this.matIconRegistry.addSvgIcon('transaction', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/account.svg'));
      this.matIconRegistry.addSvgIcon('loan', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/assets.svg'));
      this.matIconRegistry.addSvgIcon('lenders', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/notes.svg'));
      this.matIconRegistry.addSvgIcon('wallet', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/wallet.svg'));
      this.matIconRegistry.addSvgIcon('settings', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/settings.svg'));
      this.matIconRegistry.addSvgIcon('logout', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/logout.svg'));

      router.events.pipe(
        withLatestFrom(this.isHandset$),
        filter(([a, b]) => b && a instanceof NavigationEnd)
      ).subscribe(_ => this.drawer.close());
  }

}
