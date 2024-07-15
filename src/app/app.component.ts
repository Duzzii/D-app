import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D-app';

  isDesktop: boolean = true; // Default to desktop view
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  
  constructor() {
    this.checkScreenSize();
  }
  
  private checkScreenSize() {
    this.isDesktop = window.innerWidth > 768; // Adjust this value based on your design
  }
}
