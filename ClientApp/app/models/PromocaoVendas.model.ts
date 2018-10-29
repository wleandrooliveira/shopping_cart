export class PromocaoVendas {

    constructor(
        public promocaoVendasId?: number,
        public descricao_promocao?: string,
        public produto?: string,
        public quantidade_Minima?: string,
        public data_validade?: Date,
        public desconto?: number) { }
}
