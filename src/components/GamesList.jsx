import { useEffect, useState } from "react";
import Game from "./Game";
export default function ProductsCard () {
    const [games, setgames] = useState (null);


useEffect (() => {
    fetch ("https://apis.wilders.dev/wild-games/games/")
    .then (res => res.json())
    .then (data => setgames(data))
}, []);

    return (
        <> <h1> Games List </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {games && games.map((g) => (
            <Game key = {g.id} game= {g}/>
          ))}
        </div>
        </>
    );
}