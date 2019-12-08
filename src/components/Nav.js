import React from 'react';

const Nav = props => {
    return (
        <div>
            <div className="container">
            <h1 className="title">Sport Logos Game</h1>
                <h3 className= "scores">Score: {props.score} | Top Score: {props.topScore}</h3>
                <h3 className="message">{props.message}</h3>
            </div>
        </div>
    )
}


export default Nav;