import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Carrinho, CarrinhoService } from '../shared/carrinho.service';
import { Page, Produto, ProdutoService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    PaginatorModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit, OnDestroy {
  produtos: Page<Produto>;
  carrinho: Carrinho;

  readonly initalPageSize = 20;

  constructor (
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {
    this.produtos = this.produtoService.query(0, this.initalPageSize);
    this.carrinho = this.carrinhoService.findCarrinho();
  }

  ngOnInit(): void {
    this.carrinhoService.carrinhoTopic.subscribe(newCarrinho => this.carrinho = newCarrinho)
  }

  ngOnDestroy(): void {
    this.carrinhoService.carrinhoTopic.unsubscribe();
  }

  addProduto(produto: Produto) {
    this.carrinho.add(produto);
    this.carrinhoService.save(this.carrinho);
  }

  removeProduto(produto: Produto) {
    this.carrinho.remove(produto);
    this.carrinhoService.save(this.carrinho);
  }

  onPageChange(paginator: PaginatorState) {
    this.produtos = this.produtoService.query(paginator.page, paginator.rows);
  }

  getStarRating(rating: number, checkingRate: number) {
    if (rating >= checkingRate) {
      return 'pi pi-star-fill';
    }

    return 'pi pi-star';
  }
}
