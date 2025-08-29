import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import List from './list';

type Props = {} & RouteComponentProps;
type State = {
	selectedVehicle?: string;
	vehicles: string[];
};

export default class FactionGarage extends Component<Props, State> {
	readonly state: State = {
		vehicles: []
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	selectVehicle(model: string) {
		this.setState(() => ({ selectedVehicle: model }));
	}

	async spawnVehicle() {
		const { selectedVehicle } = this.state;

		if (!selectedVehicle) return;

		try {
			await rpc.callServer('Factions-SpawnVehicle', selectedVehicle);
			showNotification('success', 'Araç başarıyla teslim edildi');
		} catch (err) {
			if (err.msg) showNotification('error', err.msg);
		}
	}

	render() {
		const { selectedVehicle, vehicles } = this.state;

		return (
			<div className="faction-garage">
				<PrimaryTitle className="faction-garage_title">Garaj</PrimaryTitle>

				<div className="faction-garage_container">
					<List
						selected={selectedVehicle}
						items={vehicles}
						onSelect={this.selectVehicle.bind(this)}
					/>
				</div>

				<div className="faction-garage_footer">
					<OutlineButton isClose>Kapat</OutlineButton>
					<GradientButton onClick={this.spawnVehicle.bind(this)}>
						Teslim Et
					</GradientButton>
				</div>
			</div>
		);
	}
}
