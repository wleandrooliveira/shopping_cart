import { Produto } from "./produto.model";

export class Classificacao {

    constructor(
        public classificacaoId?: number,
        public stars?: number,
        public produto?: Produto) { }

}