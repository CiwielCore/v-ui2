import { IconType } from 'react-icons';
import {
	IoPeople,
	IoStar,
	IoWallet,
	IoCar,
	IoAlbums,
	IoMedical,
	IoServer,
	IoSettings,
	IoLibrary,
	IoCall,
	IoShield
} from 'react-icons/io5';

type App = {
	title: string;
	color: string;
	icon: IconType;
	route: string;
};

const factionApps: { [name: string]: string[] } = {
	armenian: ['members', 'ranks', 'money', 'vehicles', 'journal'],
	families: ['members', 'ranks', 'money', 'vehicles', 'gang_zones', 'journal'],
	ballas: ['members', 'ranks', 'money', 'vehicles', 'gang_zones', 'journal'],
	vagos: ['members', 'ranks', 'money', 'vehicles', 'gang_zones', 'journal'],
	marabunta: ['members', 'ranks', 'money', 'vehicles', 'gang_zones', 'journal'],
	bloods: ['members', 'ranks', 'money', 'vehicles', 'gang_zones', 'journal'],
	ems: ['members', 'ranks', 'money', 'vehicles', 'medic_calls', 'journal'],
	lspd: ['members', 'ranks', 'money', 'vehicles', 'police_calls', 'database', 'journal'],
	sang: ['members', 'ranks', 'money', 'vehicles', 'materials', 'database', 'journal']
};

const apps: { [key: string]: App } = {
	settings: {
		title: 'Ayarlar',
		color: '#79787A',
		icon: IoSettings,
		route: '/settings/'
	},
	ranks: {
		title: 'Rütbeler',
		color: '#ff9501',
		icon: IoStar,
		route: '/ranks/'
	},
	members: {
		title: 'Üyeler',
		color: '#007aff',
		icon: IoPeople,
		route: '/members/'
	},
	money: {
		title: 'Organizasyon Bakiyesi',
		color: '#32BF55',
		icon: IoWallet,
		route: '/money/'
	},
	vehicles: {
		title: 'Araçlar',
		color: '#FAC800',
		icon: IoCar,
		route: '/vehicles/'
	},
	materials: {
		title: 'Malzeme Teslimatı',
		color: '#5855d6',
		icon: IoAlbums,
		route: '/materials/'
	},
	police_calls: {
		title: 'Çağrılar',
		color: '#007aff',
		icon: IoCall,
		route: '/pol_calls/'
	},
	medic_calls: {
		title: 'Çağrılar',
		color: '#FE3B30',
		icon: IoMedical,
		route: '/med_calls/'
	},
	database: {
		title: 'Veri Tabanı',
		color: '#FE3B30',
		icon: IoServer,
		route: '/database/'
	},
	journal: {
		title: 'İşlem Günlüğü',
		color: '#30A9DC',
		icon: IoLibrary,
		route: '/journal/'
	},
	gang_zones: {
		title: 'Bölgeler',
		color: '#FE3B30',
		icon: IoShield,
		route: '/gang_zones/'
	}
};

export function getApps(faction: string) {
	const data: typeof apps = {};

	factionApps[faction].forEach((app) => {
		data[app] = apps[app];
	});

	return data;
}
