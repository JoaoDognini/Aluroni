/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Item from './Item';
import itens from './itens.json';
import style from './Itens.module.scss'

interface ItensProps {
    filtro: number | null;
    busca: string;
    ordenador: string;
}

export default function Itens({ filtro, busca, ordenador }: ItensProps) {
    const [itensCardapio, setItensCardapio] = useState(itens);

    function filtrarPorBusca(titulo: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(titulo)
    }

    function filtrarPorCategoria(id: number | null) {
        if (!filtro) return true;

        return filtro === id
    }

    function ordenar(lista: typeof itens) {
        switch (ordenador) {
            case 'porcao':
                return lista.sort((a, b) => a.porcao > b.porcao ? 1 : -1);
            case 'qtd_pessoas':
                return lista.sort((a, b) => a.serve > b.serve ? 1 : -1);
            case 'preco':
                return lista.sort((a, b) => a.preco > b.preco ? 1 : -1);
            default:
                return lista;
        }
    }

    useEffect(() => {
        const lista = itens.filter(item => filtrarPorBusca(item.titulo) && filtrarPorCategoria(item.categoria.id));
        if (ordenador) lista.sort(x => x.preco)
        setItensCardapio(ordenar(lista));
    }, [filtro, busca, ordenador])

    return (
        <div className={style.itens}>
            {itensCardapio.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}
