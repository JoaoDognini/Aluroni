import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Rodape from 'components/Rodape';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main className='container'>
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
					</Route>
					<Route path='sobre' element={<Sobre />} />
					<Route path='prato/:id' element={<Prato />} />
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
				<Rodape />
			</BrowserRouter>
		</main>
	);
}