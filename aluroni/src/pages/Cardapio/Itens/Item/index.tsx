import classNames from 'classnames';
import { IItem } from '../interfaces/item';
import style from './Item.module.scss';

export default function Item(item: IItem) {
    const pessoaOuPessoas = item.serve > 1 ? 'pessoas' : 'pessoa';

    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={item.foto} alt={item.titulo} />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{item.titulo}</h2>
                    <p>{item.descricao}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={classNames({
                        [style.item__tipo]: true,
                        [style[`item__tipo__${item.categoria.label.toLowerCase()}`]]: true
                    })}>
                        {item.categoria.label}
                    </div>

                    <div className={style.item__porcao}>
                        {item.porcao}
                    </div>

                    <div className={style.item__qtdpessoas}>
                        Serve {item.serve} {pessoaOuPessoas}
                    </div>

                    <div className={style.item__valor}>
                        R${item.preco.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
