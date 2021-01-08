import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddProductRoutingModule} from './add-product-routing.module';
import {AddProductComponent} from './add-product.component';
import {SharedModule} from '../../shared/shared.module';
import {NguCarouselModule} from '@ngu/carousel';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddProductRoutingModule,
    NguCarouselModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AddProductModule {
}
