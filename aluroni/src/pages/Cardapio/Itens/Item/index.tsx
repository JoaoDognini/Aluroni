import { IItem } from 'interfaces/item';
import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';

export default function Item(item: IItem) {

	return (
		<div className={styles.item}>
			<div className={styles.item__imagem}>
				<img src={item.foto} alt={item.titulo} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{item.titulo}</h2>
					<p>{item.descricao}</p>
				</div>
				<TagsPrato prato={item}/>
			</div>
		</div>
	);
}
