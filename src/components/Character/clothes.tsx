import React, { Component } from 'react';
import Selector from 'components/Common/selector';
import Options from './options';

const options: Record<ClothesKey, string> = { shirts: 'Felső', pants: 'Nadrág', shoes: 'Cipő' } as const;

type ClothesKey = 'shirts' | 'pants' | 'shoes';

type State = { activeOption: ClothesKey } & Record<ClothesKey, number>;

export default class Clothes extends Component<{}, State> {
  readonly state: State = { activeOption: 'shirts', shirts: 0, pants: 0, shoes: 0 };

  selectOption(name: ClothesKey) { this.setState({ activeOption: name }); }

  switchOption(option: ClothesKey, value: number) { this.setState({ [option]: value } as Pick<State, ClothesKey>); }

  render() {
    const { activeOption } = this.state;
    return (
      <div className="character_item character_item--appearance">
        <Selector
          className="character_selector"
            circleButton
            title={options[activeOption]}
            items={[...Array(4).keys()]}
            value={this.state[activeOption]}
            onChange={(v)=> this.switchOption(activeOption, v)}
        />
        <Options items={options} selected={activeOption} select={(n)=> this.selectOption(n as ClothesKey)} />
      </div>
    );
  }
}
