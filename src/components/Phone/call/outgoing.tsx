import React from 'react';
import {
	IoIosMicOff,
	IoIosKeypad,
	IoIosAdd,
	IoIosPeople,
	IoIosCall
} from 'react-icons/io';
import Info from './info';
import Controls from './controls';

type Props = {
	name: string;
	callTime?: string;
	isRecieveCall: boolean;
	onControlClick: (control: string) => void;
};

const controls = [
	{
		name: 'mic',
		label: 'Sesi kapat',
		icon: IoIosMicOff
	},
	{
		name: 'keypad',
		label: 'Tuşlar',
		icon: IoIosKeypad
	},
	{
		name: 'add',
		label: 'Ekle',
		icon: IoIosAdd
	},
	{
		name: 'contacts',
		label: 'Kişiler',
		icon: IoIosPeople
	},
	{
		name: 'decline',
		label: 'Reddet',
		icon: IoIosCall
	}
];

export default function OutgoingCall({ name, isRecieveCall, onControlClick }: Props) {
	return (
		<div className="call_outgoing">
			<Info
				name={name}
				status={isRecieveCall ? 'görüşme yapılıyor' : 'cep telefonuna çağrı...'}
			/>

			<Controls items={controls} onClick={onControlClick} />
		</div>
	);
}
