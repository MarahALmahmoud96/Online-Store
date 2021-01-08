import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {WidgetQuickValueCenterModule} from './components/widget-quick-value-center/widget-quick-value-center.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WidgetQuickProgressValueComponent} from './components/widget-quick-progress-value/widget-quick-progress-value.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, WidgetQuickProgressValueComponent],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    WidgetQuickValueCenterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    WidgetQuickProgressValueComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    FlexModule,
    ExtendedModule,
    MatToolbarModule,
    MatButtonModule,
    WidgetQuickValueCenterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ]
})
export class SharedModule {
}
