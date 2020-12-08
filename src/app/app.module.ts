import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { GalleryComponent } from './gallery';
import { PricesComponent } from './prices';
import { AboutComponent } from './about';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      GalleryComponent,
      PricesComponent,
      AboutComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
