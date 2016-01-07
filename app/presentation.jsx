import React from 'react';

export class Presentation extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: 0};
        window.addEventListener('keyup', this.action.bind(this));
    }
    action(event){
        console.log(event.keyCode);
        event.preventDefault();
        //enter, space and right arrow
        if(event.keyCode == 13 || event.keyCode == 32 || event.keyCode == 39){
            this.next();
        } 
        //left arrow
        if(event.keyCode == 37){
            this.previous();
        }
    }
    next(){
        if(this.state.index < this.props.children.length -1){
            this.setState({index: this.state.index + 1});
        }
    }
    previous(){
        if(this.state.index > 0){
            this.setState({index: this.state.index - 1});
        }
    }

    render(){
        return <div>{this.props.children[this.state.index]}</div>;
    }
}
