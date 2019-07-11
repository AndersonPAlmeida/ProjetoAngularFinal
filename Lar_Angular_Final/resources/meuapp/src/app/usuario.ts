export class Usuario{
    public email: string;
    public senha: string;
    public cpf: string;

    constructor(       
        email:string,
        senha: string,
        cpf : string,
        public nome?: string,
        public id?: number
    ) {
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}