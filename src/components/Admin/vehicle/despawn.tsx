import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

export default function AdminVehicleDespawn() {
	async function despawnVehicle(govNumber?: string) {
		await rpc.callServer('Admin-DespawnVehicle', govNumber);
		showNotification('success', 'Araç başarıyla çekildi');
	}

	return (
		<Formik
			initialValues={{ govNumber: '' }}
			validationSchema={Yup.object({
				govNumber: Yup.string()
			})}
			onSubmit={(values) => despawnVehicle(values.govNumber)}
		>
			<Form>
				<Field
					className="admin_field"
					type="text"
					name="govNumber"
					placeholder="plaka"
				/>

				<GradientButton type="submit">Çek</GradientButton>
			</Form>
		</Formik>
	);
}
