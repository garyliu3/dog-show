import React from 'react';
import Dog from '../Dog/Dog';
import './Stage.css';


class Stage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: [0, 0],
            dogs: [],
        };
    }

    fetchDogs() {
        const url = 'https://dog.ceo/api/breeds/image/random/2';
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.setState({ dogs: data.message })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    fetchDog(id) {
        const url = 'https://dog.ceo/api/breeds/image/random';
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let dogs = this.state.dogs;
            dogs[id] = data.message;
            this.setState({ dogs: dogs })
        });
    }

    handleClick(id) {
        let scores = this.state.scores.slice();
        for(var i = 0; i < scores.length; i++) {
            if(i === id) {
                scores[i] += 1;
            } else {
                scores[i] = 0;
                this.fetchDog(i);
            }
        }

        this.setState({
            scores: scores
        });
    }

    checkForWinner() {
        for (let i = 0; i < this.state.scores.length; i++) {
            if (this.state.scores[i] >= 4) {
                return this.state.dogs[i];
            }
        }
        return null;
    }

    resetContest() {
        let scores = this.state.scores.map(() => {return 0});
        this.setState({
            scores:scores
        });
    }

    componentDidMount() {
        this.fetchDogs();
    }

    renderDog(id) {
        return (
            <Dog
                key={id} 
                message={this.state.dogs[id]} 
                onClick={() => this.handleClick(id)} 
                score={this.state.scores[id]}
            />
        )
    }

    render() {
        const winner = this.checkForWinner();

        return (
            <div className="stage">
                <h1 className="stage-header">{'Best in Show 2019'}</h1>
                <p className="stage-description">
                    {'You are the judge! Click on your favorite dog to award them a point and call in a new challenger. First dog to be picked 4 times in a row is the winner!'}
                </p>
                <div className="contestants">
                {winner ? 
                    <div className="winner"> 
                        <h2 className="winner-header">{'Winner! Final Score: 4'}</h2>
                        <img className="winner-picture" src={winner} alt="WINNER" />
                        <button className="winner-button" onClick={() => this.resetContest()}>
                            <h2>{'Next Round'}</h2>
                        </button>
                    </div> 
                : [
                    this.renderDog(0),
                    this.renderDog(1)
                ]}
                </div>    
            </div>
        );
    }
}

export default Stage;
