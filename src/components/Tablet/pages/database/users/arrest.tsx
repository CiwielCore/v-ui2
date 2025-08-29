import React from 'react';
import { Router } from 'framework7/types';
import { Page, Navbar, List, ListInput, ListButton } from 'framework7-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';

type Props = {
	f7router: Router.Router;
	userId: string;
};

export default function UserArrest({ f7router, userId }: Props) {
	async function submitArrest(term: number, reason: string) {
		try {
			if (!userId) return;

			await rpc.callServer('WantedList-Arrest', [userId, term, reason]);

			f7router.back();
		} catch (err) {
			if (err.msg) showNotification('error', err.msg);
		}
	}

	return (
		<Page>
			<Navbar title="Tutuklama" backLink="Geri" />

			<Formik
				initialValues={{ term: '', reason: '' }}
				validationSchema={Yup.object({
					term: Yup.number().required().min(1).max(100),
					reason: Yup.string().required().min(1).max(100)
				})}
				onSubmit={(values) => submitArrest(+values.term, values.reason)}
			>
				{({ values, handleChange, submitForm }) => (
					<Form>
						<List inset>
							<ListInput
								clearButton
								name="term"
								type="number"
								placeholder="Süre"
								info="Tutuklama süresini 1-100 dakika arasında belirtin"
								value={values.term}
								onChange={handleChange}
								onInputClear={handleChange}
							/>

							<ListInput
								clearButton
								name="reason"
								type="text"
								placeholder="Sebep"
								info="Sebebi kısaca açıklayın"
								value={values.reason}
								onChange={handleChange}
								onInputClear={handleChange}
							/>
						</List>

						<List inset>
							<ListButton title="Tutukla" onClick={submitForm} />
						</List>
					</Form>
				)}
			</Formik>
		</Page>
	);
}
