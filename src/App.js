import './App.css';
import { Counter } from './components/Counter';
import { CountFixed } from './components/ClassConter.Fixed';
import { ClickButton } from './components/ClickButton';
import { ShowBlock } from './components/CreateBlock';
import React from 'react';

export function App() {
  return (
    <div className="App">
      <Counter />
      <CountFixed />
      <ClickButton />
    </div>
  );
}

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isVisibleBlock: true
    };
    this.ShowHideBlock = this.ShowHideBlock.bind(this)

  }
  ShowHideBlock() {
    this.setState(
      (state, props) => {
        return {
          isVisibleBlock : !state.isVisibleBlock
        }
      }
        
  )}

  render() {
    return (
      
        <div className="App">
      <Counter />
      <CountFixed />
      <ClickButton />
    
        <button className='button' onClick={this.ShowHideBlock}>Click</button>
      
        { this.state.isVisibleBlock &&
          <ShowBlock />
        }
      </div>
    )
  }
}
