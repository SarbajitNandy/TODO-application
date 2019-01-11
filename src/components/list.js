import React, { Component } from 'react';

// export default data

class ListItem extends Component {
    state = {}
        
    render() {      
        return (
            <li className='todo'>
                <input type="checkbox" defaultChecked={this.props.isChecked} 
                onClick={() => this.props.onClick(this.props.id)}/>
                <label> {this.props.label} </label>
            </li>
        );
    }
}

export default ListItem;