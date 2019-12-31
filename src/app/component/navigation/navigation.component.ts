import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, withLatestFrom, filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Constant } from 'src/app/utils/constant';
import { Path } from 'src/app/utils/path';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  token: string;

  ngOnInit() {
    this.token = localStorage.getItem(Constant.ACCESS_TOKEN);
    if (this.token === null) {
      this.router.navigate([Path.LOGIN]);
    }
  }

  logout(){
    this.authService.logout();
  }

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
        url: '/app/customers/users',
        sub: []
      },
      {
        icon: 'Borrowers',
        route: 'Borrowers',
        url: '/app/customers/borrowers',
        sub: []
      },
      {
        icon: 'Savers',
        route: 'Savers',
        url: '/app/customers/savers',
        sub: []
      }
    ]; 


    business = [
      {
        icon: 'loan-products',
        route: 'Loan Products',
        url: '/app/business/loan-product',
        sub: []
      },
      {
        icon: 'savings-products',
        route: 'Savings Products',
        url: '/app/business/savings-product',
        sub: []
      },
      {
        icon: 'loan',
        route: 'Loans',
        url: '/app/business/loans',
        sub: []
      },
      {
        icon: 'savings',
        route: 'Savings',
        url: '/app/business/savings',
        sub: []
      },
      {
        icon: 'transactions',
        route: 'Transactions',
        url: '/app/business/transactions',
        sub: []
      }
    ]; 
    

    settings = [
      {
        icon: 'transaction',
        route: 'Account',
        url: '/app/settings/account',
        sub: []
      },
      {
        icon: 'bank',
        route: 'Bank Information',
        url: '/app/settings/bank-information',
        sub: []
      },
      {
        icon: 'team',
        route: 'Team',
        url: '/app/settings/team',
        sub: []
      },
      {
        icon: 'preference',
        route: 'Preferences',
        url: '/app/settings/preferences',
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
    private router: Router,
    private authService: AuthService) {
      this.matIconRegistry.addSvgIcon('dashboard', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/dashboard.svg'));
      this.matIconRegistry.addSvgIcon('group', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/group.svg'));
      this.matIconRegistry.addSvgIcon('Borrowers', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/Borrowers.svg'));
      this.matIconRegistry.addSvgIcon('Savers', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/Savers.svg'));
      this.matIconRegistry.addSvgIcon('savings', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/savings.svg'));
      this.matIconRegistry.addSvgIcon('savings-products', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/savings-product.svg'));
      this.matIconRegistry.addSvgIcon('loan-products', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/loan-products.svg'));
      this.matIconRegistry.addSvgIcon('bank', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/bank.svg'));
      this.matIconRegistry.addSvgIcon('preference', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/preference.svg'));
      this.matIconRegistry.addSvgIcon('team', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/team.svg'));
      this.matIconRegistry.addSvgIcon('transactions', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/transactions.svg'));
      this.matIconRegistry.addSvgIcon('audit', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/audit.svg'));
      this.matIconRegistry.addSvgIcon('api', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/api.svg'));
      this.matIconRegistry.addSvgIcon('transaction', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/profile.svg'));
      this.matIconRegistry.addSvgIcon('loan', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/assets.svg'));
      this.matIconRegistry.addSvgIcon('lenders', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/group.svg'));
      this.matIconRegistry.addSvgIcon('wallet', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/wallet.svg'));
      this.matIconRegistry.addSvgIcon('settings', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/settings.svg'));
      this.matIconRegistry.addSvgIcon('logout', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/logout.svg'));
      this.matIconRegistry.addSvgIcon('activate', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/activate.svg'));
      this.matIconRegistry.addSvgIcon('deactivate', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/deactivate.svg'));
      this.matIconRegistry.addSvgIcon('blacklist', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/blacklist.svg'));
      this.matIconRegistry.addSvgIcon('edit', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/edit.svg'));
      this.matIconRegistry.addSvgIcon('delete', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/Delete.svg'));
      this.matIconRegistry.addSvgIcon('list', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/List.svg'));
      this.matIconRegistry.addSvgIcon('grid', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/nav/Grid.svg'));

      router.events.pipe(
        withLatestFrom(this.isHandset$),
        filter(([a, b]) => b && a instanceof NavigationEnd)
      ).subscribe(_ => this.drawer.close());
  }

}
