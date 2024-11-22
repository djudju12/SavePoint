import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ButtonModule, CarrinhoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild(CarrinhoComponent)
  carrinho!: CarrinhoComponent;

  toggleCarrinho() {
    this.carrinho.toggle();
  }

}
