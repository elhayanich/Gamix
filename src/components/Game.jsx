import { NavLink } from "react-router-dom";
export default function Product ({game}) {
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img  className="w-full h-48 object-cover"   src={game.background_image} alt="sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> {game.name}   </div>
            <p className="text-gray-700 text-base"> Release date :  {game.released}   </p>

        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold ">
            #{game.genres[0].name}
            </span>
            <NavLink to= {`/games/${game.id}`}   className="border p-2 rounded-lg bg-pink-700 text-white mx-auto"> Details </NavLink>
        </div>
        </div>
    );
}