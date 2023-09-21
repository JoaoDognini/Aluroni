import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
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
		<nav className={styles.menu}>
			<img src={logo} alt='Logo Aluroni' />
			<ul className={styles.menu__lista}>
				{rotas.map((rota, index) =>
					<li className={styles.menu__link} key={index}>
						<Link to={rota.to}>
							{rota.label}
						</Link>
					</li>)}
			</ul>
		</nav>
	);
}
