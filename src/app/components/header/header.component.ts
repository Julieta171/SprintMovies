import { Component } from '@angular/core';
import { LoginService } from '../../pages/login/service/login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private loginService: LoginService) { }

  onLogout() {
    this.loginService.logout();
  }
}
