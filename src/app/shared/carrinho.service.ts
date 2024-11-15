import { EventEmitter, Injectable } from "@angular/core";
import { Produto } from "../produtos/produtos.service";

export class Carrinho {
  public produtos: Produto[] = []

  constructor() { }

  public add(newProduto: Produto) {
    if (!this.alreadyInCart(newProduto)) {
      this.produtos.push(newProduto);
    }
  }

  public remove(produto: Produto) {
    const newProdutos = this.produtos.filter(p => p.id !== produto.id);
  }

  public alreadyInCart(produto: Produto): boolean {
    return this.produtos.some(cartProduto => cartProduto.id === produto.id);
  }

  public clear() {
    this.produtos = [];
  }

  public total(): number {
    return this.produtos.reduce((acc, obj) => acc + obj.preco, 0);
  }
}

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private readonly CARRINHO_STORAGE_KEY = "SAVE_POINT_CARRINHO";

  carrinhoTopic = new EventEmitter<Carrinho>();

  save(carrinho: Carrinho) {
    window.localStorage.setItem(this.CARRINHO_STORAGE_KEY, JSON.stringify(carrinho));
    this.carrinhoTopic.emit(carrinho);
  }

  findCarrinho(): Carrinho {
    const carrinhoStr = window.localStorage.getItem(this.CARRINHO_STORAGE_KEY) || '';
    if (carrinhoStr === '') {
      return new Carrinho();
    }

    return Object.assign(new Carrinho(), JSON.parse(carrinhoStr));
  }

  clear() {
    this.save(new Carrinho());
  }

}