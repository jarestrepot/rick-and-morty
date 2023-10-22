
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';


bootstrapApplication(AppComponent, {
    providers: [
    provideRouter(appRoutes ,withComponentInputBinding()),
      importProvidersFrom(BrowserModule),
      provideHttpClient(withInterceptors([]))
    ]
})
  .catch(err => console.error(err));
