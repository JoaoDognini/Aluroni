import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { IItem } from 'interfaces/item';
import { lazy } from 'react';

const TagsPrato = lazy(() => import('components/TagsPrato'));
const NotFound = lazy(() => import('pages/NotFound'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));

export default function Prato() {
	const navigate = useNavigate();
	const { id } = useParams();
	const prato = cardapio.find(item => item.id === Number(id)) as IItem;

	if (!prato) return <NotFound />;

	return (
		<Routes>
			<Route path='*' element={<PaginaPadrao />}>
				<Route index element={
					<>
						<button className={styles.voltar} onClick={() => navigate('/')}>
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
				}
				/>
			</Route>
		</Routes>
	);
}
