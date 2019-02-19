import React from 'react';
import './Winner.css';


class Winner extends React.Component {
    render() {
        return (
            <div className="winner"> 
                <h2 className="winner-header">{'Winner! Final Score: 4'}</h2>
                <img className="winner-picture" src={this.props.winner} alt="WINNER" />
                <button className="winner-button" onClick={() => this.props.onClick()}>
                    <h2>{'Next Round'}</h2>
                </button>
            </div>
        )
    }
}

export default Winner;