import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },

    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'produtos', component: ProdutosComponent }  
];