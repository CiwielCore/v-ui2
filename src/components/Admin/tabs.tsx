import React from 'react';
import Ban from './ban';
import Reports from './reports';
import Vehicle from './vehicle';
import Kick from './kick';
import Skin from './skin';
import Money from './money';
import Teleport from './teleport';
import Spectator from './spectator';
import Chat from './chat';
import House from './house';
import Demorgan from './demorgan';
import Faction from './faction';
import Journal from './journal';

type Tab = {
	name: string;
	component?: React.ComponentClass<any, any> | React.FunctionComponent;
};

const helperTabs: Tab[] = [
	{
		name: 'At',
		component: Kick
	},
	{
		name: 'Cezalandırma',
		component: Demorgan
	},
	{
		name: 'Işınlan',
		component: Teleport
	},
	{
		name: 'Raporlar',
		component: Reports
	},
	{
		name: 'İzleme',
		component: Spectator
	}
];

const adminTabs: Tab[] = [
	{
		name: 'Ban',
		component: Ban
	},
	{
		name: 'Araçlar',
		component: Vehicle
	},
	{
		name: 'Oyuncu Skini',
		component: Skin
	},
	{
		name: 'Bildirimler',
		component: Chat
	}
];

const gmTabs: Tab[] = [
	{
		name: 'Para',
		component: Money
	},
	{
		name: 'Organizasyonlar',
		component: Faction
	},
	{
		name: 'İşlem Günlüğü',
		component: Journal
	}
];

const ownerTabs: Tab[] = [
	{
		name: 'Evler',
		component: House
	}
];

export default [
	helperTabs,
	[...helperTabs, ...adminTabs],
	[...helperTabs, ...adminTabs, ...gmTabs],
	[...helperTabs, ...adminTabs, ...gmTabs, ...ownerTabs]
];
