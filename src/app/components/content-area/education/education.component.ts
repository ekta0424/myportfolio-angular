import { Component } from '@angular/core';
import { User, DEFAULT_USER } from '../../../models/user.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  user: User = DEFAULT_USER;

}
