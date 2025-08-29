import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	email: string;
};

export default function AuthConfirm({ email }: Props) {
	return (
		<div className="auth_confirm">
			<PrimaryTitle className="auth_title">Ismeretlen eszköz</PrimaryTitle>

			<p className="auth_confirm-remark">
				Ismeretlen eszközről történt bejelentkezési kísérlet.
				<br />
				Kérjük igazold, hogy te voltál.
			</p>

			<Formik
				initialValues={{ code: '' }}
				validationSchema={Yup.object({
					code: Yup.string().required('Kötelező mező')
				})}
				onSubmit={(values, { setFieldError }) => {
					rpc
						.callServer('Auth-SignInWithCode', [email, values.code])
						.then(() => rpc.callClient('Auth-SuccessLogin', email))
						.catch(() => setFieldError('code', 'Hibás kód'));
				}}
			>
				<Form className="auth_form">
					<Field
						title="Megerősítő kód"
						type="text"
						name="code"
						placeholder="E-mail ellenőrzése"
					/>

					<GradientButton type="submit">Megerősít</GradientButton>
				</Form>
			</Formik>
		</div>
	);
}
