import React from 'react';
import images from 'utils/images';
import PrimaryTitle from 'components/Common/primary-title';
import { InventoryItem } from './index';
import DropZone from './drop-zone';
import Item from './item';
import Cell from './cell';

const clothes = {
	glasses: 'Gözlük',
	hat: 'Şapka',
	mask: 'Maske',
	accessories: 'Aksesuarlar',
	jacket: 'Ceket',
	shirt: 'Tişört',
	watch: 'Saat',
	pants: 'Pantolon',
	shoes: 'Ayakkabı'
};
const equipment = {
	ammo: 'Mermi',
	armor: 'Zırh',
	hands: 'Eller',
	backpack: 'Sırt Çantası'
};

type Props = {
	use: (id: number) => void;
	drop: (id: number) => void;
	items: { [name: string]: InventoryItem };
};

export default function Character({ items, use, drop }: Props) {
	function getWearingItem(name: string) {
		const item = items[name];

		return item && <Item id={name} name={item.name} amount={1} hideAmount />;
	}

	return (
		<div className="inventory_character">
			<div className="inventory_character-container">
				<PrimaryTitle className="inventory_title">Karakter</PrimaryTitle>

				<div className="inventory_character-clothes">
					{Object.entries(clothes).map(([key, title]) => (
						<div className="inventory_character-item" key={key}>
							<h5 className="inventory_character-title">{title}</h5>

							<Cell id={key} onDrop={use}>
								{getWearingItem(key) || (
									<img src={images.getImage(`${key}.svg`)} alt={title} />
								)}
							</Cell>
						</div>
					))}
				</div>

				<div className="inventory_character-equipment">
					{Object.entries(equipment).map(([key, title]) => (
						<div className="inventory_character-item" key={key}>
							<h5 className="inventory_character-title">{title}</h5>

							<Cell id={key} onDrop={use}>
								{getWearingItem(key) || (
									<img src={images.getImage(`${key}.svg`)} alt={title} />
								)}
							</Cell>
						</div>
					))}
				</div>
			</div>

			<DropZone onDrop={drop} />
		</div>
	);
}
