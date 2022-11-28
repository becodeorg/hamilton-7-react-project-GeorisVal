import React from 'react';
import { Link } from 'react-router-dom';

export default function Results(props:any) {
    return (
    <div className="results-container">
        <ul>
            {
                props.gameResults.map((game:any) => (
                    <li key={game.id}>
                        <Link to={{
                            pathname: `/game/${game.name}`,
                            
                        }}>
                        <h3>{game.name}</h3>
                        <img src={game.background_image} alt={game.name} />
                        </Link> 
                    </li>
                ))
            }
        </ul>
    </div>
    )
}