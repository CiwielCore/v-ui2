import React, { Component } from 'react';
import Slider from './slider';
import Options from './options';

// Magyar opciók
const options: { [name: string]: string } = {
  nose: 'Orr',
  brows: 'Szemöldök forma',
  cheeks: 'Orcák',
  eyes: 'Szemek',
  lips: 'Ajkak',
  jaw: 'Állkapocs',
  chin: 'Áll'
};

const items: { [name: string]: string[] } = {
  nose: ['Orr szélesség', 'Orr magasság', 'Orr hegy hossza', 'Orrnyereg mélység', 'Orr hegy magasság', 'Orr eltolás'],
  brows: ['Szemöldök magasság', 'Szemöldök szélesség'],
  cheeks: ['Pofarész magasság', 'Pofarész szélesség', 'Orca szélesség'],
  eyes: ['Szem méret'],
  lips: ['Ajak vastagság'],
  jaw: ['Állkapocs szélesség', 'Állkapocs alak'],
  chin: ['Áll csúcs magasság', 'Áll csúcs mélység', 'Áll csúcs szélesség', 'Áll csúcs vastagság', 'Nyak vastagság']
};

type State = { activeOption: string; facedata: number[]; };

export default class CharacterFace extends Component<{}, State> {
  readonly state: State = { activeOption: 'nose', facedata: Array(20).fill(0) };

  async changeFaceData(prop: number, value: number) {
    await this.setState((state) => ({ facedata: state.facedata.map((v,i)=> i===prop ? value : v) }));
  }

  selectOption(name: string) { this.setState(()=>({ activeOption: name })); }

  getStartIndex(option: string) {
    let index = 0;
    Object.entries(items).every(([name, list]) => { if (option === name) return false; index += list.length; return true; });
    return index;
  }

  render() {
    const { activeOption, facedata } = this.state;
    const startIndex = this.getStartIndex(activeOption);
    return (
      <div className="character_item character_item--face">
        {items[activeOption].map((item, idx) => (
          <Slider key={item} title={item} value={facedata[startIndex + idx]} step={0.1} min={-1} max={1} onChange={(v)=> this.changeFaceData(startIndex+idx, v)} />
        ))}
        <Options items={options} selected={activeOption} select={this.selectOption.bind(this)} />
      </div>
    );
  }
}
