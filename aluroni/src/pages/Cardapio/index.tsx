import Buscador from './Buscador'
import style from './Cardapio.module.scss'
import logo from 'assets/logo.svg'
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador, { OpcoesOrdenador } from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt='Logo Aluroni' />
            </nav>

            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>

            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />

                <div className={style.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens filtro={filtro} busca={busca} ordenador={ordenador} />

            </section>
        </main>
    )
}
