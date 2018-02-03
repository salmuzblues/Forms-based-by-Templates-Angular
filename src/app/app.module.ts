import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationFormsComponentComponent } from './registration-forms-component/registration-forms-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
