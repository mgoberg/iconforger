import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingPageComponent } from './app/landing-page/landing-page.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LandingPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      // Add more routes as needed
    ]),
  ],
}).catch((err) => console.error(err));
