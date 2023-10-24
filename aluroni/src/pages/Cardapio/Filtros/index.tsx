import classNames from 'classnames';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import { memo } from 'react';

interface IFiltro {
    id: number;
    label: string;
}

interface FiltrosProps {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export function Filtros({ filtro, setFiltro }: FiltrosProps) {
	function selecionarFiltro(filtroSelecionado: IFiltro) {
		if (filtro === filtroSelecionado.id) return setFiltro(null);
		return setFiltro(filtroSelecionado.id);
	}

	return (
		<div className={styles.filtros}>
			{filtros.map(filtroSelecionado => (
				<button
					className={classNames({
						[styles.filtros__filtro]: true,
						[styles['filtros__filtro--ativo']]: filtro === filtroSelecionado.id,
					})}
					key={filtroSelecionado.id}
					onClick={() => selecionarFiltro(filtroSelecionado)}
				>
					{filtroSelecionado.label}
				</button>
			))}
		</div>
	);
}

export default memo(Filtros);