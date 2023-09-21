import Cabecalho from 'components/Cabecalho';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
	return (
		<>
			<Cabecalho />
			<div>
				<Outlet />
			</div>
		</>
	);
}
