import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { PagamentoHistoricoComponent } from '../historico/pagamento-historico.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ButtonModule, CarrinhoComponent, PagamentoHistoricoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild(CarrinhoComponent)
  carrinho!: CarrinhoComponent;

  @ViewChild(PagamentoHistoricoComponent)
  historico!: PagamentoHistoricoComponent;


  toggleCarrinho() {
    this.carrinho.toggle();
  }

  toggleHistorico() {
    this.historico.toggle();
  }

}
