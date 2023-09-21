import { Link } from 'react-router-dom';
import style from './Menu.module.scss';
import logo from 'assets/logo.svg';

export default function Menu() {
	const rotas = [
		{
			label: 'Início',
			to: '/'
		},
		{
			label: 'Cardápio',
			to: '/cardapio'
		},
		{
			label: 'Sobre',
			to: '/sobre'
		},
	];

	return (
		<nav className={style.menu}>
			<img src={logo} alt='Logo Aluroni' />
			<ul className={style.menu__lista}>
				{rotas.map((rota, index) =>
					<li className={style.menu__link} key={index}>
						<Link to={rota.to}>
							{rota.label}
						</Link>
					</li>)}
			</ul>
		</nav>
	);
}
