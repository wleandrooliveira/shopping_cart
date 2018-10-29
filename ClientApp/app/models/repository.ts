import { Produto } from "./Produto.model";
import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Filter, Pagination } from "./configClasses.repository";
import { PromocaoVendas } from "./PromocaoVendas.model";
import { Order } from "./order.model";
import { ErrorHandlerService, ValidationError } from "../errorHandler.service";
import "rxjs/add/operator/catch";

const produtosUrl = "/api/produtos";
const promocaovendasUrl = "/api/promocaovendas";
const ordersUrl = "/api/orders";

@Injectable()
export class Repository {

    private filterObject = new Filter();
    private paginationObject = new Pagination();

    constructor(private http: Http) {
        //this.filter.produto = "Kayak";
        this.filter.related = true;
        this.getProdutos(true);
    }
    getProduto(id: number) {
        this.sendRequest(RequestMethod.Get, produtosUrl + "/" + id)
            .subscribe(response =>
            {
                this.produto = response.json;
            });
    }
    private sendRequest(verb: RequestMethod, url: string,
        data?: any): Observable<any> {
        return this.http.request(new Request({
            method: verb, url: url, body: data
        })).map(response => {
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        })
            .catch((errorResponse: Response) => {
                if (errorResponse.status == 400) {
                    let jsonData: string;
                    try {
                        jsonData = errorResponse.json();
                    } catch (e) {
                        throw new Error("NetWork Error");
                    }
                    let messages = Object.getOwnPropertyNames(jsonData)
                        .map(p => jsonData[p]);
                    throw new ValidationError(messages);
                }
                throw new Error("Network Error");
            });

    }
    getProdutos(related = false) {
        let url = produtosUrl + "?related=" + this.filter.related;
        if (this.filter.produto) {
            url += "&produtosearch=" + this.filter.produto;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }
        url += "&metadata=true";
        this.sendRequest(RequestMethod.Get, url)
            .subscribe(response => {
                this.produtos = response.data;
                this.produto = response.produto;
                this.pagination.currentPagina = 1;
            });
    }
    getPromocaoVendas() {
        this.sendRequest(RequestMethod.Get, promocaovendasUrl)
            .subscribe(response => this.promocaovendas = response);
    }

    createProduto(prod: Produto) {
        let data = {
            nome: prod.nome, descricao: prod.descricao,
            preco: prod.preco, promocaovendas: prod.promocaoVendas ? prod.promocaoVendas.promocaoVendasId : 0
        };
        this.sendRequest(RequestMethod.Post, produtosUrl, data)
            .subscribe(response => {
                prod.produtoId = response;
                this.produtos.push(prod);
            });
    }
    createProdutoAndPromocaoVendas(prod: Produto, promo: PromocaoVendas) {
        let data = {
            descricao_promocao: promo.descricao_promocao, produto: promo.produto, quantidade: promo.quantidade_Minima,
            data_validade: promo.data_validade, desconto: promo.desconto
        };
        this.sendRequest(RequestMethod.Post, promocaovendasUrl, data)
            .subscribe(response => {
                promo.promocaoVendasId = response;
                prod.promocaoVendas = promo;
                this.promocaovendas.push(promo);
                if (prod != null) {
                    this.createProduto(prod);
                }
            });
    }

    replaceProduto(prod: Produto) {
        let data = {
            nome: prod.nome, description: prod.descricao, preco: prod.preco,
            promocaoVendas: prod.promocaoVendas ? prod.promocaoVendas.promocaoVendasId : 0
        };
        this.sendRequest(RequestMethod.Put, produtosUrl + "/" + prod.produtoId, data)
            .subscribe(response => this.getProdutos());
    }
    replacePromocaoVendas(promo: PromocaoVendas) {
        let data = {
            descricao_promocao: promo.descricao_promocao, produto: promo.produto, quantidade: promo.quantidade_Minima,
            data_validade: promo.data_validade, desconto: promo.desconto
        };
        this.sendRequest(RequestMethod.Put,
            promocaovendasUrl + "/" + promo.promocaoVendasId, data)
            .subscribe(response => this.getProdutos());
    }

    updateProduto(id: number, changes: Map<string, any>) {
        let patch = [];
        changes.forEach((value, key) =>
            patch.push({ op: "replace", path: key, value: value }));
        this.sendRequest(RequestMethod.Patch, produtosUrl + "/" + id, patch)
            .subscribe(response => this.getProdutos());
    }

    deleteProduto(id: number) {
        this.sendRequest(RequestMethod.Delete, produtosUrl + "/" + id)
            .subscribe(response => this.getProdutos());
    }
    deletePromocaoVendas(id: number) {
        this.sendRequest(RequestMethod.Delete, promocaovendasUrl + "/" + id)
            .subscribe(response => {
                this.getProdutos();
                this.getPromocaoVendas();
            });
    }

    getOrders() {
        this.sendRequest(RequestMethod.Get, ordersUrl)
            .subscribe(data => this.orders = data);
    }
    createOrder(order: Order) {
        this.sendRequest(RequestMethod.Post, ordersUrl, {
            name: order.name,
            address: order.address,
            payment: order.payment,
            products: order.products
        }).subscribe(data => {
            order.orderConfirmation = data
            order.cart.clear();
            order.clear();
        });
    }
    shipOrder(order: Order) {
        this.sendRequest(RequestMethod.Post, ordersUrl + "/" + order.orderId)
            .subscribe(r => this.getOrders())
    }

    login(name: string, password: string): Observable<Response> {
        return this.http.post("/api/account/login",
            { name: name, password: password });
    }
    logout() {
        this.http.post("/api/account/logout", null).subscribe(respone => { });
    }

    produto: Produto;
    produtos: Produto[];
    promocaovendas: PromocaoVendas[] = [];
    produtosearch: string[] = []
    orders: Order[] = [];

    get filter(): Filter {
        return this.filterObject;
    }
    get pagination(): Pagination {
        return this.paginationObject;
    }
    storeSessionData(dataType: string, data: any) {
        return this.sendRequest(RequestMethod.Post, "/api/session/" + dataType, data)
            .subscribe(response => { });
    }
    getSessionData(dataType: string): Observable<any> {
        return this.sendRequest(RequestMethod.Get, "/api/session/" + dataType);
    }
}