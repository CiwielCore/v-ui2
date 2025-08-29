export const sections: {
	[name: string]: { [name: string]: string | [string, string] };
} = {
	player: {
		organization: 'Organizasyon',
		docs: 'Belgeler',
		property: 'Mülk',
		others: 'Diğer işlemler'
	},
	self: {
		mood: 'Ruh hali',
		walking: 'Yürüyüş stili',
		animations: 'Animasyonlar',
		docs: 'Belgeler'
	},
	vehicle: {
		seatbelt: 'Emniyet kemeri',
		lock: 'Kilit',
		doors: 'Kapılar',
		trunk: 'Bagaj',
		passengers: 'Yolcuyu indir',
		refuel: 'Yakıt doldur',
		repair: 'Tamir et'
	}
};

export const groups: typeof sections = {
	organization: {},
	others: {
		money: 'Para ver',
		handshake: 'El sıkış'
	},
	docs: {
		passport: 'Pasaport',
		licenses: 'Lisanslar'
	},
	property: {
		vehicle: 'Araç Satışı',
		house: 'Ev Satışı',
		business: 'İşletme Satışı'
	},
	passengers: {},
	doors: {
		hood: 'Kaput',
		front_left: ['Ön sol', 'doors'],
		front_right: ['Ön sağ', 'doors'],
		rear_left: ['Arka sol', 'doors'],
		rear_right: ['Arka sağ', 'doors']
	},
	trunk: {
		inventory: ['Aç', 'trunk'],
		access: ['Erişim', 'trunk']
	},
	mood: {
		normal: ['Normal', 'mood'],
		aiming: ['Oyunbaz', 'mood'],
		angry: ['Kızgın', 'mood'],
		drunk: ['Sarhoş', 'mood'],
		happy: ['Mutlu', 'mood'],
		injured: ['Üzgün', 'mood'],
		stressed: ['Stresli', 'mood'],
		sulking: ['Küskün', 'mood']
	},
	walking: {
		normal: ['Normal', 'walking'],
		drunk: ['Sarhoş', 'walking'],
		fat: ['Şişman', 'walking'],
		gangster: ['Gangster', 'walking'],
		quick: ['Aceleci', 'walking'],
		sad: ['Üzgün', 'walking'],
		injured: ['Yaralı', 'walking']
	},
	animations: {}
};
