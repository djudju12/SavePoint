import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Produto } from './produtos.model';
import { ProdutoService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor (
    private produtoSevice: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoSevice.findAll();
  }

}
