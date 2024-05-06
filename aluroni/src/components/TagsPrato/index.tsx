import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { IItem } from 'interfaces/item';

interface TagsPratoProps {
	prato: IItem;
}

export default function TagsPrato({ prato }: TagsPratoProps) {
	const pessoaOuPessoas = prato.serve > 1 ? 'pessoas' : 'pessoa';
	return (
		<div className={styles.tags}>
			<div className={classNames({
				[styles.tags__tipo]: true,
				[styles[`tags__tipo__${prato.categoria.label.toLowerCase()}`]]: true
			})}>
				{prato.categoria.label}
			</div>

			<div className={styles.tags__porcao}>
				{prato.porcao}g
			</div>

			<div className={styles.tags__qtdpessoas}>
				Serve {prato.serve} {pessoaOuPessoas}
			</div>

			<div className={styles.tags__valor}>
				R${prato.preco.toFixed(2)}
			</div>
		</div>
	);
}
