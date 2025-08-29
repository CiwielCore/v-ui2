import React from 'react';
// rpc import removed – using direct RemoteEvent calls
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	setEmail: (email: string) => void;
	openForm: (name: any) => void;
	email: string;
};

// Helper to call RAGE MP remote safely in browser preview
function callRemote(name: string, ...args: any[]) {
	// @ts-ignore
	if (window.mp && window.mp.events) {
		// @ts-ignore
		window.mp.events.callRemote(name, ...args);
	} else {
		// Fallback log in dev
		// eslint-disable-next-line no-console
		console.log('[DEV] callRemote', name, args);
	}
}

export default function Login({ setEmail, openForm, email = '' }: Props) {
	return (
		<div className="auth_login">
			<PrimaryTitle>Bejelentkezés</PrimaryTitle>

			<div className="auth_login-container">
				<Formik
					initialValues={{ email, password: '' }}
					validationSchema={Yup.object({
						email: Yup.string().email('Érvénytelen e-mail').required('Kötelező mező'),
						password: Yup.string().required('Kötelező mező')
					})}
					onSubmit={(values) => {
						// Store email for confirm / next steps
						setEmail(values.email);
						// Direct RemoteEvent instead of rage-rpc
						callRemote('Auth-SignIn', values.email, values.password);
					}}
				>
					<Form className="auth_form">
						<Field
							title="E-mail cím"
							type="email"
							name="email"
							placeholder="pelda@domain.hu"
						/>
						<Field
							title="Jelszó"
							type="password"
							name="password"
							placeholder="********"
						/>

						<a className="auth_login-forgot" onClick={() => openForm('forgot')}>Elfelejtett jelszó?</a>

						<GradientButton type="submit">Belépés</GradientButton>
					</Form>
				</Formik>

				<div className="auth_login-promo">
					<h3 className="title">Nincs még fiókod?</h3>

					<button className="create-button" onClick={() => openForm('register')}>Regisztráció</button>

					<p className="descr">Hozd létre most</p>
				</div>
			</div>
		</div>
	);
}
