import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import Ban from './ban';
import Unban from './unban';

export default function AdminBan() {
	return (
		<div className="admin_ban">
			<Tabs prefixCls="admin_tabs">
				<TabPane tab="Banla" key="ban">
					<Ban />
				</TabPane>

				<TabPane tab="Banı Kaldır" key="unban">
					<Unban />
				</TabPane>
			</Tabs>
		</div>
	);
}
