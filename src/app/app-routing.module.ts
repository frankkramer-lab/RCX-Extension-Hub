import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtensionsComponent} from "./components/extensions/extensions.component";
import {RcxPackageComponent} from "./components/rcx-package/rcx-package.component";
import {TemplateComponent} from "./components/template/template.component";
import {RcxExtensionHubComponent} from "./components/rcx-extension-hub/rcx-extension-hub.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {SubmitComponent} from "./components/submit/submit/submit.component";

const routes: Routes = [
  { path: 'extensions', component: ExtensionsComponent},
  { path: 'rcx-package', component: RcxPackageComponent},
  { path: 'template', component: TemplateComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'submit', component: SubmitComponent},
  { path: '', component: RcxExtensionHubComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
