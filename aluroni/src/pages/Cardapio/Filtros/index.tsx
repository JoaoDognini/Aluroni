import classNames from 'classnames';
import filtros from './filtros.json';
import style from './Filtros.module.scss';

interface IFiltro {
    id: number;
    label: string;
}

interface FiltrosProps {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {
	function selecionarFiltro(filtroSelecionado: IFiltro) {
		if (filtro === filtroSelecionado.id) return setFiltro(null);
		return setFiltro(filtroSelecionado.id);
	}

	return (
		<div className={style.filtros}>
			{filtros.map(filtroSelecionado => (
				<button
					className={classNames({
						[style.filtros__filtro]: true,
						[style['filtros__filtro--ativo']]: filtro === filtroSelecionado.id,
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
