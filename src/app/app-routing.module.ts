import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtensionsComponent} from "./extensions/extensions.component";
import {RcxPackageComponent} from "./rcx-package/rcx-package.component";
import {TemplateComponent} from "./template/template.component";
import {RcxExtensionHubComponent} from "./rcx-extension-hub/rcx-extension-hub.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  { path: 'extensions', component: ExtensionsComponent},
  { path: 'rcx-package', component: RcxPackageComponent},
  { path: 'template', component: TemplateComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: '', component: RcxExtensionHubComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
