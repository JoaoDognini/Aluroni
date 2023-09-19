import style from './Cardapio.module.scss'
import logo from 'assets/logo.svg'

export default function Cardapio() {
    return (
        <nav className={style.menu}>
            <img src={logo} alt='Logo Aluroni' />
        </nav>
    )
}
