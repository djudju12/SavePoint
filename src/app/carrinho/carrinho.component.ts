import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { OrderListModule } from 'primeng/orderlist';
import { Produto } from '../produtos/produtos.service';
import { Carrinho, CarrinhoService } from '../shared/carrinho.service';
import { PagamentoService } from '../shared/pagamento.service';
import { UserService } from '../shared/user.service';

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
export class CarrinhoComponent implements OnDestroy {
  protected isVisible: boolean = false;
  tiposPagamento = [ 'Pix', 'Cartão', 'Boleto' ];
  tipoPagamentoSelecionado: string = 'Pix';
  carrinho: Carrinho;
  private carrinhoTopic: any;

  constructor (
    private carrinhoService: CarrinhoService,
    private pagamentoService: PagamentoService,
    private userService: UserService,
    private router: Router
  ) {
    this.carrinho = this.carrinhoService.findCarrinho();
    this.carrinhoTopic = this.carrinhoService.carrinhoTopic.subscribe(c => this.carrinho = c);
  }

  ngOnDestroy(): void {
    this.carrinhoTopic.unsubscribe();
  }

  toggle() {
    this.isVisible = !this.isVisible
  }

  clear() {
    this.carrinhoService.clear();
  }

  removerItem(item: Produto) {
    console.log(item)
    this.carrinho.remove(item);
    this.carrinhoService.save(this.carrinho);
  }

  pagar() {
    const user = this.userService.getLoggedUser();
    if (user === null) {
      this.router.navigate(['/login']);
    } else {
      if (this.carrinho.produtos.length > 0) {
        this.pagamentoService.pagar(user.id, this.tipoPagamentoSelecionado, this.carrinho);
        this.carrinhoService.clear();
      }
    }
  }

  totalProdutos(): string {
    if (this.carrinho.produtos.length > 0) {
        return this.carrinho.produtos.length < 10 ? String(this.carrinho.produtos.length) : '+9';
    }

    return '';
  }
}
