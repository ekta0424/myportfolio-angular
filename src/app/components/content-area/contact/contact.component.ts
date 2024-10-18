import { Component } from '@angular/core';
import { User, DEFAULT_USER } from '../../../models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  user: User = DEFAULT_USER;
}
