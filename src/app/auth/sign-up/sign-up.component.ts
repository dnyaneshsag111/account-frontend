import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  faUserPlus = faUserPlus;
}
