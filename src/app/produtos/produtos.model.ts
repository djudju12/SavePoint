export class Produto {
  constructor(
    public preco: number,
    public nome: string,
    public categorias: string[],
    public img: string
  ) { }
}