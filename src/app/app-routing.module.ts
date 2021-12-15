import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './my-forms/form-control/form-control.component';
import { MyFormsComponent } from './my-forms/my-forms.component';
import { ReactiveComponent } from './my-forms/reactive/reactive.component';
import { SelectFormComponent } from './my-forms/select-form/select-form.component';
import { TemplateComponent } from './my-forms/template/template.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'my-forms'
}, {
  path: 'my-forms',
  component: MyFormsComponent,
  children: [{
    path: '',
    component: SelectFormComponent
  },{
    path: 'form-control',
    component: FormControlComponent
  },{
    path: 'reativo',
    component: ReactiveComponent
  },{
    path: 'template',
    component: TemplateComponent
  }]
}, {
  path: 'profile',
  loadChildren:() => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
