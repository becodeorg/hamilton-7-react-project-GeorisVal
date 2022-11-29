import axios from 'axios';
import React, { useState } from 'react';

export default function GameDetails() {
    const [game, setGame]:any = useState("");
    const getLastItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    function getGames() {
        axios
            .get(`https://api.rawg.io/api/games/${getLastItem}?key=8f0f7afd66254afbbd55e97e8ba32642`)
            .then(res => setGame(res.data));
    }
    getGames()
    console.log(getLastItem)

    if(game !== undefined && game !== "") {
        console.log(game)
    return (
        <div>
            <img src={`${game.background_image}`} className="w-2/5 m-auto" /> 
            <h1>{game.name}</h1>
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}</p>
            <h3>Genre(s):</h3>
            { 
                game.genres.map((g:any) => `${g.name} | `)
            }

            <h3>Platform(s):</h3>
            { 
                game.platforms.map((p:any) => `${p.platform.name} | `)
                }
    </div>
    );
    }
}