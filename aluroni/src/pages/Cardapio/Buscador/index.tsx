import { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface BuscadorProps {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export function Buscador({ busca, setBusca }: BuscadorProps) {
	const elemento = useMemo(() => <CgSearch size={20} color='#4C4D5E' />, []);
	return (
		<div className={styles.buscador}>
			<input
				placeholder='Buscar'
				value={busca}
				onChange={evento => setBusca(evento.target.value)}
			/>
			{elemento}
		</div>
	);
}

export default memo(Buscador);