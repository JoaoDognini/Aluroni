import Cabecalho from 'components/Cabecalho';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
	return (
		<>
			<Cabecalho />
			<div className={stylesTema.container}>
				<Outlet />
			</div>
		</>
	);
}
