import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExtensionsComponent } from './components/extensions/extensions.component';
import { AppRoutingModule } from './app-routing.module';
import { RcxPackageComponent } from './components/rcx-package/rcx-package.component';
import { TemplateComponent } from './components/template/template.component';
import { RcxExtensionHubComponent } from './components/rcx-extension-hub/rcx-extension-hub.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmitComponent } from './components/submit/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtensionsComponent,
    RcxPackageComponent,
    TemplateComponent,
    RcxExtensionHubComponent,
    ImpressumComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
