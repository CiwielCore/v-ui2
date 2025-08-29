import React, { useState, useEffect } from 'react';
import rpc from 'utils/rpc';
import Cell from './cell';

type Action = {
	title: string;
	icon?: string;
};

const actionList: { [name: string]: Action } = {
	invite: {
		title: 'Organizasyona Davet Et',
		icon: 'handshake'
	},
	docs: {
		title: 'Kimliği Göster'
	},
	cuff: {
		title: 'Kelepçe Tak',
		icon: 'handcuffs'
	},
	uncuff: {
		title: 'Kelepçeyi Çıkar',
		icon: 'handcuffs'
	},
	tie: {
		title: 'Kablo Bağı Kullan',
		icon: 'cable_tie'
	},
	untie: {
		title: 'Kablo Bağını Kes',
		icon: 'cable_tie'
	},
	follow: {
		title: 'Peşinden Sürükle',
		icon: 'detain'
	},
	unfollow: {
		title: 'Bırak',
		icon: 'detain'
	},
	headsack_enable: {
		title: 'Kafa Torbası Tak',
		icon: 'sack'
	},
	headsack_disable: {
		title: 'Kafa Torbasını Çıkar',
		icon: 'sack'
	},
	unmask: {
		title: 'Maskeyi Çıkar',
		icon: 'mask'
	},
	frisk: {
		title: 'Üstünü Ara',
		icon: 'backpack'
	},
	vehicle: {
		title: 'Araca Oturt'
	},
	heal: {
		title: 'Tedavi Öner',
		icon: 'pill'
	},
	reanimate: {
		title: 'Yeniden Canlandır'
	},
	medcard_physical: {
		title: 'Fiziksel Sağlık Raporu Ver',
		icon: 'medcard'
	},
	medcard_mental: {
		title: 'Psikolojik Sağlık Raporu Ver',
		icon: 'medcard'
	},
	military_id: {
		title: 'Askeri Kimlik Ver',
		icon: 'licenses'
	}
};

export default function TargetOrganization() {
	const [actions, setActions] = useState<string[]>([]);

	useEffect(() => {
		rpc.callClient('FactionActions-GetItems').then(setActions);
	}, []);

	function callAction(action: string) {
		rpc.callClient('FactionActions-Call', action);
	}

	return (
		<>
			{actions.map((item) => {
				const action = actionList[item];

				return (
					<Cell
						key={item}
						label={action.icon ?? item}
						title={action.title}
						onClick={() => callAction(item)}
					/>
				);
			})}
		</>
	);
}
