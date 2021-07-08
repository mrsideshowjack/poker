import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    render(){
    return (
        <div className={`card ${this.props.flip}`}>
            <div className="card-inner">
                <div className="card-front">
                    {this.props.num}
            </div>
            <div className="card-back">
                <span>Bee</span>
            </div>
            </div>
        </div>
    )
    }
}

export default Card