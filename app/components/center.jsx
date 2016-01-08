import React from 'react';

export class Center extends React.Component{
    getTextAlign(){
        return this.props.align || 'center';
    }
    render(){
        return <div className='center' style={{textAlign: this.getTextAlign()}}>
                    {this.props.children}
        </div>;
    }
}
