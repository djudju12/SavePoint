import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { PagamentoHistoricoComponent } from '../historico/pagamento-historico.component';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ButtonModule, CarrinhoComponent, PagamentoHistoricoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor (
    private userService: UserService,
    private router: Router
  ) { }

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

  isLogged(): boolean {
    return this.userService.isLogged();
  }

  logoff(): void {
    this.userService.logoff();
  }

  gotoLogin(): void {
    this.router.navigate(['/login'])
  }
}
