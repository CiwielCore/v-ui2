import React from 'react';
import { trim } from 'lodash';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
// rpc import marad egyelőre – ha nincs backend implementáció, később cserélhető
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	toLogin: () => void;
};

export default function Forgot({ toLogin }: Props) {
	async function onSubmit(values: FormikValues, { setFieldError }: FormikHelpers<any>) {
		const data = {
			email: trim(values.email).toLowerCase(),
			password: trim(values.password),
			code: trim(values.code)
		};

		try {
			await rpc.callServer('Auth-ResetPassword', data);
			toLogin();
		} catch (err: any) {
			setFieldError(err.field, err.message);
		}
	}

	return (
		<div className="auth_forgot auth_register">
			<PrimaryTitle className="auth_title">Jelszó visszaállítás</PrimaryTitle>

			<Formik
				initialValues={{
					email: '',
					password: '',
					passwordConfirm: '',
					code: ''
				}}
				validationSchema={Yup.object({
					email: Yup.string().email('Érvénytelen e-mail').required('Kötelező mező'),
					password: Yup.string()
						.min(4, 'Legalább 4 karakter')
						.max(32, 'Legfeljebb 32 karakter')
						.required('Kötelező mező'),
					passwordConfirm: Yup.string()
						.required('A jelszavak nem egyeznek')
						.oneOf([Yup.ref('password'), null], 'A jelszavak nem egyeznek'),
					code: Yup.string().required('Kötelező mező')
				})}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form className="auth_form">
						<div className="auth_form-container">
							<Field
								title="E-mail"
								type="email"
								name="email"
								placeholder="pelda@domain.hu"
							/>

							<GradientButton
								type="button"
								color="green"
								onClick={() => {
									if (formik.values.email && !formik.errors.email)
										rpc
											.callServer('Auth-GetResetCode', trim(formik.values.email).toLowerCase())
											.then(() => showNotification('info', 'E-mailt elküldtük'))
											.catch(() => formik.setFieldError('email', 'Fiók nem található'));
							}}
							>
								Kód küldése
							</GradientButton>

							<div className="auth_form-group">
								<Field
									title="Új jelszó"
									type="password"
									name="password"
									placeholder="********"
								/>
								<Field
									title="Megerősítés"
									type="password"
									name="passwordConfirm"
									placeholder="********"
								/>
							</div>

							<Field
								className="auth_form-part"
								title="Megerősítő kód"
								type="text"
								name="code"
								placeholder="E-mail ellenőrzése"
							/>
						</div>

						<GradientButton type="submit">Megerősít</GradientButton>
					</Form>
				)}
			</Formik>

			<OutlineButton className="auth_back-btn" onClick={toLogin}>
				Vissza
			</OutlineButton>
		</div>
	);
}
