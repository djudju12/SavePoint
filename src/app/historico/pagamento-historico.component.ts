import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { PagamentoHistorico, PagamentoService } from '../shared/pagamento.service';
import { User, UserService } from '../shared/user.service';

@Component({
  standalone: true,
  selector: "app-pagamento-historico",
  templateUrl: "./pagamento-historico.component.html",
  imports: [
    DatePipe, DialogModule, DividerModule, ButtonModule
  ],
  styleUrls: ["./pagamento-historico.component.css"],
})
export class PagamentoHistoricoComponent {
  protected isVisible: boolean = false;
  historico: PagamentoHistorico | null = null;
  user: User | null = null;

  constructor(
    private pagamentoService: PagamentoService,
    private userService: UserService
  ) { }

  formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.user = this.userService.getLoggedUser();
      this.historico = this.user !== null ? this.pagamentoService.getHistoricoPagamentoByUserId(this.user.id) : null;
    }
  }
}
