import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';

type Props = {
	submit: () => void;
	cancel: () => void;
};

export default function BusinessConfirm({ submit, cancel }: Props) {
	return (
		<div className="business_confirm">
			<div className="business_confirm-container">
				<PrimaryTitle className="business_confirm-title">
					İşletmeyi devlete sat
				</PrimaryTitle>

				<p className="business_confirm-remark">
					<b>İşletmeyi devlete satmak</b> istediğinizden emin misiniz?
				</p>

				<div className="business_confirm-buttons">
					<OutlineButton onClick={cancel}>Kapat</OutlineButton>
					<GradientButton onClick={submit}>Sat</GradientButton>
				</div>
			</div>
		</div>
	);
}
