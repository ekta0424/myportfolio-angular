import { Component } from '@angular/core';
import { User, DEFAULT_USER } from '../../models/user.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  user: User = DEFAULT_USER;
}
