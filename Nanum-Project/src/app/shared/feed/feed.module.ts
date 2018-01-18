import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';
import { SharedModule } from '../shared.module';
import { WindowScrollDirective } from './window-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    FeedComponent,
  ],
  declarations: [
    FeedComponent,
    WindowScrollDirective,
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
