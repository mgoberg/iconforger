import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent {
  // User info
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  };

  // Icon generator configuration
  iconConfig = {
    name: 'New Icon',
    size: 512,
    shape: 'circle',
    backgroundColor: '#5c33ff',
    foregroundColor: '#ffffff',
    icon: 'rocket',
    padding: 20,
    borderRadius: 15,
    shadow: true,
  };

  // Icon library options
  shapes = ['circle', 'square', 'rounded-square', 'hexagon', 'custom'];
  icons = [
    'rocket',
    'star',
    'heart',
    'bell',
    'shield',
    'home',
    'settings',
    'user',
    'chat',
    'document',
  ];

  // Recent icons
  recentIcons = [
    {
      id: 1,
      name: 'App Logo',
      thumbnail: 'assets/placeholders/icon1.png',
      date: '2023-11-10',
    },
    {
      id: 2,
      name: 'Settings Icon',
      thumbnail: 'assets/placeholders/icon2.png',
      date: '2023-11-09',
    },
    {
      id: 3,
      name: 'Notification',
      thumbnail: 'assets/placeholders/icon3.png',
      date: '2023-11-08',
    },
  ];

  // Tabs
  activeTab = 'editor';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Icon generation
  generateIcon() {
    console.log('Generating icon with config:', this.iconConfig);
    // In a real app, this would call a service to generate the icon

    // Simulate adding to recent icons
    const newIcon = {
      id: this.recentIcons.length + 1,
      name: this.iconConfig.name,
      thumbnail: 'assets/placeholders/new-icon.png',
      date: new Date().toISOString().split('T')[0],
    };

    this.recentIcons.unshift(newIcon);
  }

  // Export functions
  exportIcon(format: string) {
    console.log(`Exporting icon as ${format}`);
    // This would trigger downloading the icon in the specified format
  }
}
