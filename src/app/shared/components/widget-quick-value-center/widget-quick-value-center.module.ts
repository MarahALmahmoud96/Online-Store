import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuickValueCenterComponent } from './widget-quick-value-center.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [WidgetQuickValueCenterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [WidgetQuickValueCenterComponent]
})
export class WidgetQuickValueCenterModule {
}

