import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../component/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatMenuModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersComponent } from '../../component/headers/headers.component';
import { AlertModule } from 'ngx-bootstrap';
import { TokenInterceptorService } from 'src/app/service/token-interceptor/token-interceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent, HeadersComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    HttpClientModule,
    MatTabsModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatMenuModule,
    NavigationComponent,
    HttpClientModule,
    HeadersComponent,
    MatTabsModule,
    AlertModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class SharedModule { }
