import { Injectable } from "@angular/core";

export interface User {
    id: number,
    password: string;
    name: string;
    username: string;
}

const THE_ONLY_USER: User = {
    id: 0,
    username: 'Teste',
    password: '12345',
    name: 'Davy Jones'
};

@Injectable({providedIn: 'root'})
export class UserService {
    private readonly USUARIO_LOGADO_KEY = 'SAVE_POINT_USUARIO_LOGADO';

    login(username: string, password: string): boolean {
        if (username === THE_ONLY_USER.username && password === THE_ONLY_USER.password) {
            window.localStorage.setItem(this.USUARIO_LOGADO_KEY, JSON.stringify(THE_ONLY_USER));
            return true;
        }

        return false;
    }

    logoff() {
        window.localStorage.removeItem(this.USUARIO_LOGADO_KEY);
    }

    getLoggedUser(): User | null {
        const userStr = window.localStorage.getItem(this.USUARIO_LOGADO_KEY);
        if (userStr === null) {
            return null;
        }

        return JSON.parse(userStr);
    }

    isLogged(): boolean {
        return this.getLoggedUser() !== null;
    }

}