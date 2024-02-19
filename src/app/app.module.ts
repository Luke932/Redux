import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/enviroment/enviroment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument(
      {
        maxAge:25,
        logOnly: environment.production,
        autoPause:true
      }
    ): [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
