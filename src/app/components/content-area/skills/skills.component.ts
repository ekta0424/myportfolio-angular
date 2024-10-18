import { Component } from '@angular/core';
import { User, DEFAULT_USER } from '../../../models/user.model';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  user: User = DEFAULT_USER;

}
