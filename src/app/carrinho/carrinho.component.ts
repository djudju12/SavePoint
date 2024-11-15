import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { OrderListModule } from 'primeng/orderlist';
import { Carrinho, CarrinhoService } from '../shared/carrinho.service';
import { PagamentoService } from '../shared/pagamento.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    DialogModule,
    DividerModule,
    OrderListModule,
    ButtonModule,
    DropdownModule,
    FormsModule
  ],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  protected isVisible: boolean = true;
  tiposPagamento = [ 'Pix', 'Cartão', 'Boleto' ];
  tipoPagamentoSelecionado: string = 'Pix';
  carrinho: Carrinho;

  constructor (
    private carrinhoService: CarrinhoService,
    private pagamentoService: PagamentoService
  ) {
    this.carrinho = this.carrinhoService.findCarrinho();
    this.carrinhoService.carrinhoTopic
      .subscribe(newCarrinho => this.carrinho = newCarrinho);
  }

  toggle() {
    this.isVisible = !this.isVisible
    if (this.isVisible) {
      this.carrinho = this.carrinhoService.findCarrinho();
    }
  }

  clear() {
    this.carrinhoService.clear();
  }

  pagar() {
    if (this.carrinho.produtos.length > 0) {
      this.pagamentoService.pagar(0, this.tipoPagamentoSelecionado, this.carrinho);
      this.carrinhoService.clear();
    }
  }
}
