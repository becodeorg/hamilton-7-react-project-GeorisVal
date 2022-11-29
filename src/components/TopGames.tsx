import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function TopGames() {
    useEffect(() => {
        fetchGames()
    }, [])

    const [games, setGames] = useState([])

    const fetchGames = () => {
        fetch('https://rawg.io/api/collections/must-play/games')
            .then(resp => resp.json())
            .then(({ results }) => setGames(results))
    }

    return (
        <div className="rounded-lg shadow-md w-6/12 m-auto">
            <ul className="grid grid-cols-3 gap-5">
                {
                    games.map((game:any) => (
                        <li key={game.id}>
                            <Link to={{
                                pathname: `/game/${game.id}`,
                                }} >
                                <h3>{game.name}</h3>
                                <img src={game.background_image} alt="game" />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}