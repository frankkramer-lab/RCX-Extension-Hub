import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { AppRoutingModule } from './app-routing.module';
import { RcxPackageComponent } from './rcx-package/rcx-package.component';
import { TemplateComponent } from './template/template.component';
import { RcxExtensionHubComponent } from './rcx-extension-hub/rcx-extension-hub.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtensionsComponent,
    RcxPackageComponent,
    TemplateComponent,
    RcxExtensionHubComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
