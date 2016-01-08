import React from 'react';
import {connect} from 'react-redux';
import {total} from '../action_creators';

export class Presentation extends React.Component{
    render(){
        return <div ref={this.props.onRef}>{this.props.children[this.props.index]}</div>;
    }
}

function mapStateToProps(state){
    return {index: state.get('index')};
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onRef: () => dispatch(total(ownProps.children.length))
    };
}


export const PresentationContainer = connect(mapStateToProps, mapDispatchToProps)(Presentation);
