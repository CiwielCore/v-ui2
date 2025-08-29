import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

const items: { [name: string]: { title: string; gauge?: string } } = {
	melee: {
		title: 'Yakın Dövüş'
	},
	handguns: {
		title: 'Tabancalar',
		gauge: 'Küçük Kalibre'
	},
	rifles: {
		title: 'Tüfekler',
		gauge: 'Büyük Kalibre'
	},
	shotguns: {
		title: 'Av Tüfekleri',
		gauge: 'Saçma'
	}
};

type Props = {
	current: string;
	select: (name: string) => void;
};

export default function WeaponsCategories({ current, select }: Props) {
	return (
		<div className="weapons_categories">
			{Object.entries(items).map(([name, { title, gauge }]) => (
				<div
					className={classNames('weapons_categories-item', { active: current === name })}
					key={name}
					onClick={() => select(name)}
				>
					<h3 className="weapons_categories-title">{title}</h3>

					<div className="container">
						<img src={images.getImage(`${name}.svg`)} alt={title} />

						<span className="weapons_categories-gauge">{gauge}</span>
					</div>
				</div>
			))}
		</div>
	);
}
