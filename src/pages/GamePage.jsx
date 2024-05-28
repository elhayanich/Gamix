import { useLoaderData } from "react-router-dom";

export default function GamePage() {
  const game = useLoaderData();

  const { background_image, name, released, rating, genres, short_screenshots } = game;

  return (
    <>
      <h1 className="font-bold text-5xl text-center my-12">{name}</h1>
      <div className="flex flex-col items-center">
        <div className="flex justify-center mb-8">
          <img src={background_image} alt={`Image of ${name}`} className="w-2/4" />
        </div>
        <div className="w-2/4 mx-auto text-center">
          <p className="font-bold text-xl">Release date: {released}</p>
          <p className="font-bold text-l text-pink-700">{rating} / 5</p>
          <div className="flex justify-center"> 
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
              #{genres[0].name}
            </span>
          </div>
        </div>
        <div className="font-bold flex justify-center mt-8">
          <h4>Some pictures of the game:</h4>
        </div>
        <div className="flex justify-center flex-wrap">
          {short_screenshots.map((screen, index) => (
            <img key={index} src={screen.image} alt={screen.id} className="m-2" />
          ))}
        </div>
      </div>
    </>
  );
}