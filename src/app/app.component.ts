import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavbarComponent, CarrinhoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SavePoint';
  constructor(private router: Router) {}

notInLogInPage(){
  return this.router.url !== '/login';
}

}
