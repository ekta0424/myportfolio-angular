import { Component } from '@angular/core';
import { User, DEFAULT_USER } from '../../../models/user.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  user: User = DEFAULT_USER;
}
