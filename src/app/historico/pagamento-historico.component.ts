import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { PagamentoHistorico, PagamentoService } from '../shared/pagamento.service';

@Component({
  standalone: true,
  selector: "app-pagamento-historico",
  templateUrl: "./pagamento-historico.component.html",
  imports: [
    DatePipe, DialogModule, DividerModule, ButtonModule
  ],
  styleUrls: ["./pagamento-historico.component.css"],
})
export class PagamentoHistoricoComponent implements OnInit {
  protected isVisible: boolean = true;
  historico: PagamentoHistorico | null = null;

  constructor(
    private pagamentoService: PagamentoService
  ) { }

  ngOnInit(): void {
    this.historico = this.getHistorico(this.pagamentoService.getHistoricoPagamentos());
    this.pagamentoService.historicoTopic.subscribe(novoHist => this.historico = this.getHistorico(novoHist));
  }

  formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  private getHistorico(hist: PagamentoHistorico[]): PagamentoHistorico | null {
    if (hist.length > 0) {
      return hist[0];
    }

    return null;
  }
}
