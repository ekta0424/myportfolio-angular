import { Component, Input } from '@angular/core';
import { User, DEFAULT_USER } from '../../../models/user.model';

export interface UserDetails {
  name: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  //user: User = {   name: 'Ekta',title: 'Full Stack Developer',description: 'I am web developer' };
  user: User = DEFAULT_USER;
}
