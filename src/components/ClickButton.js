import React from 'react';

export class ClickButton extends React.Component {
    constructor(props) {
      super(props)
        this.click = this.click.bind(this);
        this.state = {
            block: <div className="show"> this block</div>
        }
    }
    click() {
        if (this.state.block.props.className === 'show') {
            this.setState(
                {
             block: <div className = 'hide' > this block</div >        
            })
        } else  {
            this.setState(
                {
                    block: <div className='show' >this block</div >
                })
        }
    }
   
 render(){
    return (
        <div>
            <div>{ this.state.block}</div>
            <button className='button' onClick={this.click}>click button</button>
        </div>
     )
 }
}