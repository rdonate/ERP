import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// External Libreries
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
