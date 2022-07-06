import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFooterComponent } from './blocks/admin-footer/admin-footer.component';

@NgModule({
  declarations: [AdminFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminFooterComponent]
})
export class AdminFooterBlockModule { }
