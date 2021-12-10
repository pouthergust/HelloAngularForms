import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { MyFormsComponent } from './my-forms.component';
import { SelectFormComponent } from './select-form/select-form.component';
import { CardsModule } from '../components/cards/cards.module';
import { FormControlComponent } from './form-control/form-control.component';
import { RouterModule } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    SelectFormComponent,
    FormControlComponent,
    ReactiveComponent,
    TemplateComponent,
    MyFormsComponent
  ],
  imports: [
    CommonModule,
    MyFormsRoutingModule,
    CardsModule
  ],
  exports: [MyFormsComponent]
})
export class MyFormsModule { }
