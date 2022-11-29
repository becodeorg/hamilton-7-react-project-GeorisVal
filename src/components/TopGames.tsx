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
        <div className="rounded-lg shadow-md w-11/12 m-auto">
            <ul className="grid grid-cols-3 gap-5">
                {
                    games.map((game:any) => (
                            <Link to={{
                                pathname: `/game/${game.id}`,
                                }} className="text-white">
                                <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${game.short_screenshots[0].image})`}}>
                                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{game.name}</li>
                                </div>
                            </Link>
                        
                    ))
                }
            </ul>
        </div>
    )
}