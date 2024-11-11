export class Produto {
  constructor(
    public id: number,
    public preco: number,
    public nome: string,
    public categorias: string[],
    public img: string
  ) { }
}