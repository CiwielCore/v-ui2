import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import Navigation from '../../partials/navigation';
import Button from '../../partials/button';
import Group from '../../partials/group';
import List from './list';

const items: { [name: string]: string } = {
	cursor: 'İmleç',
	noHUD: 'Arayüz görünürlüğü',
	mic: 'Sesli sohbet',
	target: 'Oyuncu menüsü',
	inventory: 'Envanter',
	tablet: 'Organizasyon tableti',
	engine: 'Motor',
	lock: 'Araç kilidi',
	seatbelt: 'Emniyet kemeri',
	cruise: 'Hız sabitleyici',
	left_ind: 'Sol sinyal',
	right_ind: 'Sağ sinyal',
	quick_1: 'Hızlı erişim 1',
	quick_2: 'Hızlı erişim 2',
	quick_3: 'Hızlı erişim 3'
};

type Props = {
	close: () => void;
};
type State = {
	binds: { [name in keyof typeof items]: string };
	selected?: string;
};

export default class SettingsKeys extends Component<Props, State> {
	readonly state: State = {
		binds: {}
	};

	componentDidMount() {
		this.getBindsFromClient();
	}

	getBindsFromClient() {
		rpc.callClient('HUD-GetBinds').then((data) => this.setState(() => ({ binds: data })));
	}

	selectKeyBind(name?: string) {
		this.setState(() => ({ selected: name }));
	}

	async saveKeyBind(key: string) {
		const { selected, binds } = this.state;

		if (!selected || binds[selected] === key) return;

		try {
			await rpc.callClient('Binder-Rebind', [selected, key]);

			this.setState(() => ({ binds: { ...binds, [selected]: key } }));
		} catch (error) {
			showNotification('error', 'Bu tuş zaten kullanılıyor');
		}
	}

	render() {
		const { selected, binds } = this.state;

		return (
			<div className="settings_keys">
				{selected ? (
					<List
						name={items[selected]}
						current={binds[selected]}
						selectKey={this.saveKeyBind.bind(this)}
						close={this.selectKeyBind.bind(this, undefined)}
					/>
				) : (
					<>
						<Navigation
							title="Tuş atamaları"
							close={{ title: '', onClick: this.props.close }}
						/>

						<Group className="settings_keys-list">
							{Object.entries(items).map(([name, title]) => (
								<Button
									icon="arrow"
									key={name}
									current={binds[name]}
									onClick={this.selectKeyBind.bind(this, name)}
								>
									{title}
								</Button>
							))}
						</Group>
					</>
				)}
			</div>
		);
	}
}
