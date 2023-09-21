import style from './Cabecalho.module.scss';

export default function Cabecalho() {
	return (
		<header className={style.cabecalho}>
			<div className={style.cabecalho__texto}>
				A casa do código e da massa
			</div>
		</header>
	);
}
