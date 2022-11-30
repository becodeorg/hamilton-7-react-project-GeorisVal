import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function GameDetails():any {
    useEffect(() => {
        getGames()
    }, [])
    const [loading, setLoading]:any = useState("");
    const [game, setGame]:any = useState("");
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    function getGames() {
        axios
            .get(`https://api.rawg.io/api/games/${id}?key=952d287c927344c9bf73dc7afd0ab555`)
            .then(res => setGame(res.data))
            .then(setLoading(false));
    }

    if(game !== undefined && game !== "") {
        console.log(game)
    if (loading) {
        return (
            <div>
                <p>Ca charge</p>
            </div>
        )
    }
    else {
        return (
        <div className="w-8/12 bg-slate-900 rounded-md m-auto p-10">
            <img src={`${game.background_image}`} className="w-2/5 m-auto rounded-l" /> 
            <h1>{game.name}</h1>
            <p>Released: <br />{game.released}</p><br />
            <p>Rating: <br />{game.rating} / 5</p> <br />
            <h3>Genre(s):</h3>
            { 
                game.genres.map((g:any) => `${g.name}, `) 
            }
            <br />
            <br /> <h3>Platform(s):</h3>
            { 
                game.platforms.map((p:any) => `${p.platform.name}, `)
                }
            <br />
            <br /><h3>Description:</h3>
            <div dangerouslySetInnerHTML={{__html: game.description}}></div>
    </div>
    );
    }
}
}