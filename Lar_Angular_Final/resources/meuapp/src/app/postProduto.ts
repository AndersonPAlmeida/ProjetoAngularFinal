export class PostProduto{
    constructor(
        public nome: string,
        public preco:string,
        public detalhes: string,
        public modelo: string,
        public material: string,
        public lavagem: string,
        public arquivo ?: string,
        public id?: number
    ) {}
}