import React from 'react';
import { capitalize, trim } from 'lodash';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
// rpc import removed – using direct RemoteEvent calls
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	setEmail: (email: string) => void;
	toLogin: () => void;
};

function callRemote(name: string, ...args: any[]) {
	// @ts-ignore
	if (window.mp && window.mp.events) {
		// @ts-ignore
		window.mp.events.callRemote(name, ...args);
	} else {
		// eslint-disable-next-line no-console
		console.log('[DEV] callRemote', name, args);
	}
}

export default function Register({ setEmail, toLogin }: Props) {
	async function onSubmit(values: FormikValues, { setFieldError }: FormikHelpers<any>) {
		const data = {
			email: trim(values.email).toLowerCase(),
			password: trim(values.password),
			firstName: capitalize(trim(values.firstName)),
			lastName: capitalize(trim(values.lastName)),
			code: ''
		};

		try {
			setEmail(data.email);
			callRemote('Auth-SignUp', data.email, data.password, data.firstName, data.lastName, data.code);
			toLogin();
		} catch (err: any) {
			setFieldError(err.field, err.message);
		}
	}

	return (
		<div className="auth_register">
			<PrimaryTitle className="auth_title">Regisztráció</PrimaryTitle>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					passwordConfirm: ''
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
					firstName: Yup.string()
						.matches(/^[a-z\s]+$/i, 'Csak latin betűk')
						.max(32, 'Legfeljebb 32 karakter')
						.required('Kötelező mező'),
					lastName: Yup.string()
						.matches(/^[a-z\s]+$/i, 'Csak latin betűk')
						.max(32, 'Legfeljebb 32 karakter')
						.required('Kötelező mező')
				})}
				onSubmit={onSubmit}
			>
				{() => (
					<Form className="auth_form">
						<div className="auth_form-container">
							<div className="auth_form-group">
								<Field title="Keresztnév" type="text" name="firstName" placeholder="Janos" />
								<Field title="Vezetéknév" type="text" name="lastName" placeholder="Kovacs" />
							</div>

							<Field
								title="E-mail"
								type="email"
								name="email"
								placeholder="pelda@domain.hu"
							/>

							<div className="auth_form-group">
								<Field
									title="Jelszó"
									type="password"
									name="password"
									placeholder="********"
								/>
								<Field
									title="Jelszó megerősítés"
									type="password"
									name="passwordConfirm"
									placeholder="********"
								/>
							</div>
						</div>

						<GradientButton type="submit">Létrehozás</GradientButton>
					</Form>
				)}
			</Formik>

			<OutlineButton className="auth_back-btn" onClick={toLogin}>Vissza</OutlineButton>
		</div>
	);
}
