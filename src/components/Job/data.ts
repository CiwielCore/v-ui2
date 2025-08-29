const jobs: {
	[name: string]: { title: string; description: string; requirements: string };
} = {
	waterfront: {
		title: 'Liman İşçisi',
		description:
			'Liman işi oldukça tozludur. \n Ağır yükleri taşımak ve büyük konteynerleri özel araçlarla taşımak zorunda kalacaksın! \n Yeni bir seviyeye ulaştığında - emeğinin karşılığı artacak. Ayrıca, yeni seviyede görevlerin değişecek.',
		requirements: '1. seviye'
	},
	building: {
		title: 'İnşaatçı',
		description:
			'Şehir hızla büyüyor, projeleri hızlıca teslim etmek gerek! \n İnşaatta ağır yükleri taşımak ve kamyonları boşaltmak zorunda kalacaksın! \n Yeni bir seviyeye ulaştığında - emeğinin karşılığı artacak. Ayrıca, yeni seviyede görevlerin değişecek.',
		requirements: '1. seviye'
	},
	postal: {
		title: 'Postacı',
		description:
			'Postanede yoğunluk var! \n Vatandaşlar mektuplarını ve bazıları büyük paketlerini bekliyor. \n Mektupları dağıtacak ve büyük paketleri teslim edeceksin! \n Yeni bir seviyeye ulaştığında - emeğinin karşılığı artacak. Ayrıca, yeni seviyede görevlerin değişecek.',
		requirements: '2. seviye, B sınıfı ehliyet'
	},
	car_theft: {
		title: 'Araba Hırsızı',
		description:
			'Unutma, bu iş yasa dışı! \n Bu yolu seçtiğinde geri dönüş yok! Arabaları maymuncukla çalacak ve müşterilere teslim edeceksin. \n Yeni bir seviyeye ulaştığında, kilit açma zorluğu artacak ve ödül de artacak.',
		requirements: '3. seviye, Maymuncuk'
	},
	smuggling: {
		title: 'Kaçakçı',
		description:
			'Malı aldıktan sonra verilen noktaya git. Koordinatlar GPS ile gönderildi. \n Koordinatlara dikkatlice git, fazla dikkat çekme. \n Polis görürse başın belaya girebilir.',
		requirements: '3. seviye'
	}
};

export default jobs;
