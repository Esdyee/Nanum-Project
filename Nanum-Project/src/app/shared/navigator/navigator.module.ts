import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigatorComponent } from './navigator.component';
import { MaterialModule } from '../material.module';
import { TabFilterPipe } from './tab-filter.pipe';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavigatorComponent
  ],
  declarations: [
    NavigatorComponent,
    AccountSettingsComponent,
    NavTabComponent,
    TabFilterPipe
  ]
})
export class NavigatorModule { }
