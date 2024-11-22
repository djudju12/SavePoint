import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Carrinho, CarrinhoService } from '../shared/carrinho.service';
import { Category, Page, Produto, ProdutoService } from './produtos.service';

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
  produtos!: Page<Produto>;
  carrinho: Carrinho;
  categorias: Category[];
  filtro = "";
  searchStr = "";

  pageSize = 20;
  private page = 0;

  constructor (
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {
    this.carrinho = this.carrinhoService.findCarrinho();
    this.categorias = this.produtoService.categories();
    this.find();
  }

  ngOnInit(): void {
    this.carrinhoService.carrinhoTopic.subscribe(newCarrinho => this.carrinho = newCarrinho)
  }

  ngOnDestroy(): void {
    this.carrinhoService.carrinhoTopic.unsubscribe();
  }

  find() {
    this.produtos = this.produtoService.query(this.page, this.pageSize, [this.filtro], this.searchStr);
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
    this.page = paginator.page || 0;
    this.pageSize = paginator.rows || 20;
    this.find();
  }

  getStarRating(rating: number, checkingRate: number) {
    if (rating >= checkingRate) {
      return 'pi pi-star-fill';
    }

    return 'pi pi-star';
  }

  setFiltroCategoria(categoria: string) {
    this.filtro = this.filtro === categoria ? "" : categoria;
  }

  filtrar() {
    this.page = 0;
    this.find();
  }

  removerFiltro(categoria: string) {
    this.filtro = "";
    this.page = 0;
    this.find();
  }
}
