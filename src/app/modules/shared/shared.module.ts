import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../component/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatMenuModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeadersComponent } from '../../component/headers/headers.component';


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
    MatTabsModule
  ]
})
export class SharedModule { }
