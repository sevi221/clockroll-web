import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/misc/login/login.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { UsersService } from './shared/service/users.service';
import { GlobalErrorHandlerService } from './shared/service/global-error-handler.service';

import './rxjs.operators';
//Routes
import { routes } from './app.routes';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component'
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component'

import { SessionService } from './shared/service/session.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SessionService,
    UsersService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
