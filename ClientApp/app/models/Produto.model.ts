import { PromocaoVendas } from "./PromocaoVendas.model";
import { Classificacao } from "./Classificacao.model";

export class Produto {
    constructor(
        public produtoId?: number,
        public nome?: string,
        public descricao?: string,
        public preco?: number,
        public promocaoVendas?: PromocaoVendas,
        public classificacao?: Classificacao[]) {}
}