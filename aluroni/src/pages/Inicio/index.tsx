import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { IItem } from 'interfaces/item';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
	const navigate = useNavigate();
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 4);

	function redirecionarPrato(prato: IItem) {
		navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
	}

	return (
		<section>
			<h3 className={stylesTema.titulo}>
				Recomendações da cozinha
			</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map(item =>
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.foto} alt={item.titulo} />
						</div>
						<button
							className={styles.recomendado__botao}
							onClick={() => redirecionarPrato(item)}
						>
							Ver mais
						</button>
					</div>)}
			</div>
			<h3> Nossa Casa </h3>
			<div className={styles.nossa_casa}>
				<img src={nossaCasa} alt='Casa do Aluroni' />
				<div className={styles.nossa_casa__endereco}>
					Rua Vergueiro, 3185 - Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}
