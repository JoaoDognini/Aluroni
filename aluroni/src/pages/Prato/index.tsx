import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import { useNavigate, useParams } from 'react-router-dom';
import { IItem } from 'interfaces/item';
import TagsPrato from 'components/TagsPrato';

export default function Prato() {
	const navigate = useNavigate();
	const { id } = useParams();
	const prato = cardapio.find(item => item.id === Number(id)) as IItem;

	return (
		<>
			<button className={styles.voltar} onClick={() => navigate(-1)}>
				{'< Voltar'}
			</button>
			<section className={styles.container}>
				<h1 className={styles.titulo}>
					{prato.titulo}
				</h1>

				<div className={styles.imagem}>
					<img src={prato.foto} alt={prato.titulo} />
				</div>

				<div className={styles.conteudo}>
					<p className={styles.conteudo__descricao}>
						{prato.descricao}
					</p>

					<TagsPrato prato={prato} />
				</div>
			</section>
		</>
	);
}
