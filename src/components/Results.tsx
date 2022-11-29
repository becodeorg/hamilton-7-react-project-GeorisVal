import React from 'react';
import { Link } from 'react-router-dom';

export default function Results(props:any) {
    return (
    <div className="results-container rounded-lg shadow-md w-10/12 max-h-[30em] m-auto">
        <ul className="grid grid-cols-4 gap-5">
            {
                props.gameResults.map((game:any) => (
                    <li key={game.id}>
                        <Link to={{
                            pathname: `/game/${game.id}`,
                            
                        }}
                            state={{
                                gameProps: {
                                game: game
                                }
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