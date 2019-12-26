import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../component/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersComponent } from '../../component/headers/headers.component';
import { AlertModule } from 'ngx-bootstrap';
import { TokenInterceptorService } from 'src/app/service/token-interceptor/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavigationComponent, HeadersComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatStepperModule,
    MatCheckboxModule,
    MatMenuModule,
    RouterModule,
    HttpClientModule,
    MatTabsModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    RouterModule,
    MatMenuModule,
    MatStepperModule,
    NavigationComponent,
    HttpClientModule,
    HeadersComponent,
    MatTabsModule,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
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
