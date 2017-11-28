import { NgModule } from '@angular/core';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  exports: [NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatSliderModule,
    BrowserAnimationsModule],
  declarations: []
})
export class MaterialModule { }
