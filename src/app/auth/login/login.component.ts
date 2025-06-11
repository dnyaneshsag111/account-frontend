import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faUnlock = faUnlock;
}
