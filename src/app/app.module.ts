import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomLayoutComponent} from './custom-layout/custom-layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AddProductComponent} from './pages/add-product/add-product.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CustomLayoutModule} from './custom-layout/custom-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    CustomLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
