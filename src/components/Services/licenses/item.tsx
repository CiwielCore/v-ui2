import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import prettify from 'utils/prettify';
import PrimaryTitle from 'components/Common/primary-title';
import GradientButton from 'components/Common/gradient-button';

const licenses = {
	house: {
		name: 'Ev',
		description: '2 ev sahibi olmanızı sağlar'
	},
	business: {
		name: 'İşletme',
		description: '1 işletme satın almanıza izin verir'
	},
	car: {
		name: 'Binek Araçlar',
		description: 'Binek araçları kullanmanıza izin verir'
	},
	motorcycle: {
		name: 'Motosiklet',
		description: 'Motosikletleri kullanmanıza izin verir'
	},
	boat: {
		name: 'Tekne',
		description: 'Su araçlarını kullanmanıza izin verir'
	},
	air: {
		name: 'Hava Araçları',
		description: 'Hava araçlarını kullanmanıza izin verir'
	},
	truck: {
		name: 'Kamyon',
		description: 'Kamyonları kullanmanıza izin verir'
	},
	weapon: {
		name: 'Silah',
		description: 'Silah taşımanız için gereklidir'
	},
	fishing: {
		name: 'Balıkçılık',
		description: 'Daha fazla balık tutmak için gereklidir'
	}
};

type Props = {
	name: string;
	price: number;
	bought: boolean;
	buy: () => void;
};

export default function LicensesItem({ name, price, bought, buy }: Props) {
	return (
		<div
			className={classNames('licenses_item', {
				disabled: bought
			})}
			style={{
				backgroundImage: `${
					bought ? 'linear-gradient(black, black),' : ''
				} url(${images.getImage(`${name}.jpg`, 'licenses')})`
			}}
		>
			<PrimaryTitle className="licenses_item-title">Lisans</PrimaryTitle>
			<h3 className="licenses_item-subtitle">{(licenses as any)[name].name} için</h3>

			{!bought ? (
				<>
					<p className="licenses_item-info">{(licenses as any)[name].description}</p>

					<div className="licenses_item-price">
						<h4>Fiyat</h4>

						<span>{prettify.price(price)}</span>
					</div>

					<GradientButton className="licenses_item-buy" onClick={buy}>
						Satın al
					</GradientButton>
				</>
			) : (
				<>
					<span className="licenses_item-checkmark" />
				</>
			)}
		</div>
	);
}
