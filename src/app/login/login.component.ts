import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { UserService } from '../shared/user.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, ButtonModule, MessageModule, DialogModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router, private userService: UserService) { }

  onSubmit() {
    if (this.userService.login(this.username, this.password)) {
      this.errorMessage = null;
      console.log(
        "hello"
      )
      this.router.navigate(['']);
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }

}