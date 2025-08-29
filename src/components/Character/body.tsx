import React, { Component } from 'react';
import Selector from './selector';
import Slider from './slider';

const genderList = { male: 'Férfi', female: 'Nő' };
const names = {
	mother: ['Anna','Erika','Jasmin','Kata','Emese','Izabella','Zsófi','Ava','Kamilla','Violet','Sarolta','Evelin','Nóra','Eszter','Hanna','Boglárka','Nelli','Olívia','Eliza','Emma','Mesi','Maja','Lili'],
	father: ['Bence','Dénes','József','Noel','Endre','Huba','Ádám','István','Levente','Gergő','Vince','Endre2','Dani','András','Viktor','Márk','Sándor','Kevin','Andor','Soma','Antal','Kálmán','Nimród','Csanád']
};

const parents = {
	father: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,42,43,44],
	mother: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,45]
};

type State = { gender: 'male' | 'female'; father: number; mother: number; similarity: number; skin: number; };

export default class CharacterBody extends Component<{}, State> {
	readonly state: State = { gender: 'male', mother: 0, father: 0, similarity: 0.5, skin: 6 };

	componentDidMount() { /* TODO: creator state integráció */ }

	changeAppearance() { /* TODO: remote update hívások */ }
	async switchParent(parent: 'mother' | 'father', value: string) { await this.setState(() => ({ [parent]: names[parent].indexOf(value) } as any)); this.changeAppearance(); }
	async changeSkin(name: 'similarity' | 'skin', value: number) { await this.setState((s)=>({ ...s, [name]: value })); this.changeAppearance(); }
	async toggleGender(value: string) { await this.setState(()=>({ gender: value as any })); this.changeAppearance(); }

	render() {
		const { gender, father, mother, similarity, skin } = this.state;
		return (
			<div className="character_item character_item--body">
				<Selector title="Nem" items={Object.keys(genderList)} value={gender} customValue={genderList[gender]} onChange={this.toggleGender.bind(this)} />
				<Selector title="Anya" value={names.mother[mother]} items={names.mother} onChange={this.switchParent.bind(this, 'mother')} />
				<Selector title="Apa" value={names.father[father]} items={names.father} onChange={this.switchParent.bind(this, 'father')} />
				<Slider title="Hasonlóság" value={similarity} min={0} max={1} step={0.1} onChange={(v)=>this.changeSkin('similarity', v)} />
				<Slider title="Bőrtónus" value={skin} min={0} max={12} onChange={(v)=>this.changeSkin('skin', v)} />
			</div>
		);
	}
}
