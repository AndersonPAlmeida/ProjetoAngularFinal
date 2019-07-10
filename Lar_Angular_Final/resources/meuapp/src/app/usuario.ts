export class Usuario{
    public email: string;
    public senha: string;
    
    constructor(       
        email:string,
        senha: string,
        public cpf ?: string,
        public nome?: string,
        public id?: number
    ) {
        this.email = email;
        this.senha = senha;
    }
}