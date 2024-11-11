import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Carrinho, CarrinhoService } from '../shared/carrinho.service';
import { Produto } from './produtos.model';
import { ProdutoService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: Produto[] = [];
  carrinho: Carrinho;

  constructor (
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {
    this.produtos = this.produtoService.findAll();
    this.carrinho = this.carrinhoService.findCarrinho();
  }

  addProduto(produto: Produto) {
    this.carrinho.add(produto);
    this.carrinhoService.save(this.carrinho);
  }

  removeProduto(produto: Produto) {
    this.carrinho.remove(produto);
    this.carrinhoService.save(this.carrinho);
  }
}
