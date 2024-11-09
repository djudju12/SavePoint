import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoService } from './produtos/produtos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SavePoint';

  constructor (
    private produtosService: ProdutoService
  ) {
    produtosService.createAllProducts();
  }
}
