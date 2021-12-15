import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { MyFormsComponent } from './my-forms.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { SelectFormComponent } from './select-form/select-form.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [{
  path: '',
  component: MyFormsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRoutingModule { }
