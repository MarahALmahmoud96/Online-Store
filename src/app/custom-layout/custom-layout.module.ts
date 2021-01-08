import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomLayoutComponent} from './custom-layout.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class CustomLayoutModule { }
