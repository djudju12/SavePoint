import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, ButtonModule, MessageModule, DialogModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent {
  username: string = 'Teste';
  password: string = '12345';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'Teste' && this.password === '12345') {
      this.errorMessage = null;
      this.router.navigate(['/produtos']);
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }

}