import { Component } from '@angular/core';

export interface UserDetails {
  name: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent {
  UserDetails: UserDetails = {
    name: 'Ekta',
    title: 'Full Stack Developer',
    description: 'I am a web developer',
  };
}
