import React from 'react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

export default function AdminFactionWar() {
	async function startWar() {
		await rpc.callServer('Admin-StartFortWar');
		showNotification('success', 'Etkinliği başlattınız');
	}

	return (
		<div className="admin_tab-container">
			<GradientButton type="submit" onClick={startWar}>
				"FZ Baskını"nı Başlat
			</GradientButton>
		</div>
	);
}
