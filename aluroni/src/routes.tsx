import Menu from 'components/Menu';
import Rodape from 'components/Rodape';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
	return (
		<main className='container'>
			<BrowserRouter>
				<Menu />
				<Suspense fallback={<p>Carregando...</p>}>
					<Routes>
						<Route path='/' element={<PaginaPadrao />}>
							<Route index element={<Inicio />} />
							<Route path='cardapio' element={<Cardapio />} />
						</Route>
						<Route path='sobre' element={<Sobre />} />
						<Route path='prato/:id' element={<Prato />} />
						<Route path='*' element={<NotFound />}></Route>
					</Routes>
				</Suspense>
				<Rodape />
			</BrowserRouter>
		</main>
	);
}