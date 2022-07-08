import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';



@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormPageComponent
      },
    ])
  ]
})
export class FormModule { }
