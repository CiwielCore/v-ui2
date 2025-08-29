import React from 'react';
import { IoIosAlarm, IoIosText, IoIosCall } from 'react-icons/io';
import Info from './info';
import Controls from './controls';

type Props = {
	name: string;
	onControlClick: (control: string) => void;
};

const controls = [
	{
		name: 'remember',
		label: 'Hatırlat',
		icon: IoIosAlarm
	},
	{
		name: 'message',
		label: 'Mesaj',
		icon: IoIosText
	},
	{
		name: 'decline',
		label: 'Reddet',
		icon: IoIosCall
	},
	{
		name: 'accept',
		label: 'Yanıtla',
		icon: IoIosCall
	}
];

export default function IncomingCall({ name, onControlClick }: Props) {
	return (
		<div className="call_incoming">
			<Info status="cep telefonu" name={name} />

			<Controls items={controls} onClick={onControlClick} />
		</div>
	);
}
