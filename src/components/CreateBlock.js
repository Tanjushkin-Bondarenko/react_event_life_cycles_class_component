import React from 'react';

export class ShowBlock extends React.Component{
    
    componentDidMount() {
        console.log("component show")
       
    }
    componentWillUnmount() {
        console.log("component hide")
    }
    render() {
        return <div className='block2'>show/hide block</div>
    }
} 