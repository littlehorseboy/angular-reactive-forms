import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorFormBuilderComponent } from './profile-editor-form-builder/profile-editor-form-builder.component';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
import { IdentityRevealedValidatorDirective } from './identity-revealed-validator.directive';
import { UniqueLastNameValidatorDirective } from './unique-last-name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileEditorFormBuilderComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueLastNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
