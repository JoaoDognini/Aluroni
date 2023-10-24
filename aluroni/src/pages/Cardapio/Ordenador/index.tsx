import classNames from 'classnames';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes-ordenar.json';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { memo } from 'react';
import { useState } from 'react';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface OrdenadorProps {
	ordenador: OpcoesOrdenador;
	setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>;
}

export function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {
	const [aberto, setAberto] = useState(false);
	const ordenadorSelecionado = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles['ordenador--ativo']]: ordenador !== '',
			})}
			onClick={() => setAberto(!aberto)}
			onBlur={() => setAberto(false)}
		>
			<span>{ordenadorSelecionado || 'Ordenar Por'}</span>
			<MdKeyboardArrowUp
				style={{
					transform: `rotate(${aberto ? 0 : 180}deg)`
				}}
				size={20}
			/>
			{/* {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />} */}
			<div className={
				classNames({
					[styles.ordenador__options]: true,
					[styles['ordenador__options--ativo']]: aberto,
				})}
			>
				{opcoes.map(opcao =>
					<div
						className={styles.ordenador__option}
						key={opcao.value}
						onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}
					>
						{opcao.nome}
					</div>
				)}
			</div>
		</button>
	);
}

export default memo(Ordenador);