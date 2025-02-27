import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingPageComponent } from './app/landing-page/landing-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LandingPageComponent },
      // Add more routes as needed
    ]),
  ],
}).catch((err) => console.error(err));
