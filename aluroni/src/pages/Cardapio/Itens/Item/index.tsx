import { IItem } from 'interfaces/item';
import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

export function Item(item: IItem) {
	const navigate = useNavigate();
	return (
		<div className={styles.item} onClick={() => navigate(`/prato/${item.id}`)}>
			<div className={styles.item__imagem}>
				<img src={item.foto} alt={item.titulo} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{item.titulo}</h2>
					<p>{item.descricao}</p>
				</div>
				<TagsPrato prato={item} />
			</div>
		</div>
	);
}

export default memo(Item);