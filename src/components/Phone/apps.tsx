import Main from './main';
import Keypad from './keypad';
import Contacts from './contacts';
import Settings from './settings';
import Maps from './maps';
import Sim from './sim';
import Vehicles from './vehicles';
import Referral from './referral';
import Support from './support';
import Donation from './donation';

export type PhoneApp = {
	name: string;
	component: any;
	attached?: boolean;
};

const apps: { [key: string]: PhoneApp } = {
	maps: {
		name: 'Haritalar',
		component: Maps
	},
	sim: {
		name: 'Racoon',
		component: Sim
	},
	referral: {
		name: 'Referral',
		component: Referral
	},
	vehicles: {
		name: 'Araçlar',
		component: Vehicles
	},
	donation: {
		name: 'Mağaza',
		component: Donation
	},
	support: {
		name: 'Destek',
		component: Support
	},

	calls: {
		name: 'Aramalar',
		component: Keypad,
		attached: true
	},
	contacts: {
		name: 'Kişiler',
		component: Contacts,
		attached: true
	},
	messages: {
		name: 'Mesajlar',
		component: Main,
		attached: true
	},
	settings: {
		name: 'Ayarlar',
		component: Settings,
		attached: true
	}
};

export default apps;
