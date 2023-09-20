import { ICategoria } from "./categoria";

export interface IItem {
    titulo: string;
    descricao: string;
    foto: string;
    porcao: number;
    serve: number;
    preco: number;
    id: number;
    categoria: ICategoria
}
