import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'produtos', component: ProdutosComponent }
];
