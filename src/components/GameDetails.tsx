import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function GameDetails():any {
    useEffect(() => {
        getGames()
    }, [])
    const [game, setGame]:any = useState("");
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    function getGames() {
        axios
            .get(`https://api.rawg.io/api/games/${id}?key=952d287c927344c9bf73dc7afd0ab555`)
            .then(res => setGame(res.data));
    }

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
            
            <h3>Description</h3>
            {game.description}
    </div>
    );
    }
}