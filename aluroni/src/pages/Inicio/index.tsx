import cardapio from 'data/cardapio.json';
import style from './Inicio.module.scss';

export default function Inicio() {
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
	return (
		<section>
			<h3 className={style.titulo}>
				Recomendações da cozinha
			</h3>
			<div className={style.recomendados}>
				{pratosRecomendados.map(item =>
					<div key={item.id} className={style.recomendado}>
						<div className={style.recomendado__imagem}>
							<img src={item.foto} alt={item.titulo} />
						</div>
						<button className={style.recomendado__botao}>
							Ver mais
						</button>
					</div>)}
			</div>
		</section>
	);
}