import styles from './Rodape.module.scss';
import logo from 'assets/logo.svg';

export default function Rodape() {
	return (
		<footer className={styles.rodape}>
			<img src={logo} alt='Logo Aluroni' />
		</footer>
	);
}
