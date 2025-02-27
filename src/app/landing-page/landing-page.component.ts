import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LandingPageComponent {
  showLoginModal = false;

  constructor(private router: Router) {}

  toggleLoginModal() {
    this.showLoginModal = !this.showLoginModal;
  }

  loginWithProvider(provider: string) {
    // This would normally authenticate with the provider
    console.log(`Logging in with ${provider}`);

    // For now, just navigate to the dashboard
    this.router.navigate(['/dashboard']);
  }
}
