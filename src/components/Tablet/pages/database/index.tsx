import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default function Database() {
	return (
		<Page>
			<Navbar title="Veri Tabanı" />

			<List inset>
				<ListItem link="users/" title="Vatandaşlar" />
				<ListItem link="vehicles/" title="Araçlar" />
				<ListItem link="/wanted/" title="Arananlar" />
			</List>
		</Page>
	);
}
