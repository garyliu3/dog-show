import React from 'react';
import './Dog.css';


class Dog extends React.Component {
    render() {
        return (
            <div className="contestant">
                <h2 className="contestant-score">{'Score: ' + this.props.score}</h2>
                <div className="contestant-select">
                    <button className="contestant-button" onClick={() => this.props.onClick()} >
                        <img className="contestant-picture" src={this.props.message} alt="Dog not found." />
                    </button>
                </div>
            </div>
        );
    }
}

export default Dog;