import React from 'react';
import images from 'utils/images';

export default function InventoryHints() {
	return (
		<div className="inventory_hints">
			<div className="inventory_hints-item">
				<img src={images.getImage('esc-key.svg')} alt="mouse left" />

				<p className="inventory_hints-text">
					Tıklayın <br />
					Envanteri kapatmak için
				</p>
			</div>

			<div className="inventory_hints-item">
				<img src={images.getImage('mouse-left.svg')} alt="mouse left" />

				<p className="inventory_hints-text">
					Eşyaya tıklayın <br />
					Eşya bilgisini göster
				</p>
			</div>

			<div className="inventory_hints-item">
				<img src={images.getImage('zero-key.svg')} alt="mouse left" />

				<p className="inventory_hints-text">
					Tıklayın <br />
					Eşyayı elden çıkarmak için
				</p>
			</div>
		</div>
	);
}
