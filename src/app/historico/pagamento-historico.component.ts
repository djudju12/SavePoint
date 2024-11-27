import { Component, OnInit } from '@angular/core';
import { PagamentoHistorico, PagamentoService } from '../shared/pagamento.service';

@Component({
  selector: "app-pagamento-historico",
  templateUrl: "./pagamento-historico.component.html",
  styleUrls: ["./pagamento-historico.component.css"],
})
export class PagamentoHistoricoComponent implements OnInit {
  protected isVisible: boolean = false;
  historicoPagamentos: PagamentoHistorico[] = [];
  mostrarHistorico: boolean = false;

  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit(): void {
    this.toggle();
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.historicoPagamentos = this.pagamentoService.getHistoricoPagamentos();
    }
  }

  fecharHistorico(): void {
    this.mostrarHistorico = false;
  }

  formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
  }

  abrirHistorico(): void {
    this.mostrarHistorico = true;
  }
}
