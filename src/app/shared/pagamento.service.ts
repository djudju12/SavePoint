import { Injectable } from "@angular/core";
import { Produto } from "../produtos/produtos.service";
import { Carrinho } from "./carrinho.service";

export class Pagamento {

  constructor (
    public dataCompra: Date,
    public pagamento: string,
    public total: number,
    public produtos: Produto[]
  ) { }

}

export class PagamentoHistorico {

  constructor (
    public usuarioId: number,
    public pagamentos: Pagamento[]
  ) { }

}

@Injectable({ providedIn: 'root' })
export class PagamentoService {
  private readonly PAGAMENTO_STORAGE_KEY = 'SAVE_POINT_PAGAMENTOS';

  pagar(usuarioId: number, tipoPagamento: string, carrinho: Carrinho) {
    const historico = this.getHistoricoPagamentos();
    let i = -1;
    for (let j = 0; j < historico.length; j++) {
      if (historico[j].usuarioId === usuarioId) {
        i = j;
        break
      }
    }

    const novoPagamento = new Pagamento(new Date(), tipoPagamento, carrinho.total(), carrinho.produtos);
    if (i >= 0) {
      historico[i].pagamentos.push(novoPagamento);
    } else {
      historico.push({usuarioId: usuarioId, pagamentos: [novoPagamento]});
    }

    window.localStorage.setItem(this.PAGAMENTO_STORAGE_KEY, JSON.stringify(historico));
  }

  private getHistoricoPagamentos(): PagamentoHistorico[] {
    const pagamentosStr = window.localStorage.getItem(this.PAGAMENTO_STORAGE_KEY) || '';
    if (pagamentosStr === '') {
      return [];
    }

    return JSON.parse(pagamentosStr);
  }
}