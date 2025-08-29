import React from 'react';
import vehicles from 'data/vehicles.json';
import Navigation from '../partials/navigation';
import Button from '../partials/button';
import Group from '../partials/group';
import { VehicleData } from './index';

type Props = {
	data: VehicleData;

	getPosition: () => void;
	spawn: () => void;
	despawn: () => void;
	close: () => void;
};

export default function Vehicle({ data, getPosition, spawn, despawn, close }: Props) {
	return (
		<div className="vehicles_vehicle">
			<Navigation close={{ title: 'Araçlar', onClick: close }} />

			<Group className="vehicles_vehicle-info">
				<Button current={(vehicles as any)[data.model] ?? data.model}>İsim</Button>
				<Button current={data.govNumber || 'Yok'}>Plaka</Button>
			</Group>

			<Group className="vehicles_vehicle-actions">
				<Button color="blue" onClick={spawn}>
					Teslim et (80$)
				</Button>

				{data.spawned && (
					<Button color="red" onClick={despawn}>
						Çekici çağır
					</Button>
				)}

				<Button color="blue" onClick={getPosition}>
					Konum al
				</Button>
			</Group>
		</div>
	);
}
