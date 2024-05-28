import { Link } from "react-router-dom";
export default function Navbar() {
    return (
      <nav className="bg-pink-700 flex text-l text-white justify-between px-4 h-20">
        <span className=" text-3xl my-auto"> Gamix</span>
        <ul className="flex gap-5 my-auto">
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/games">Games</Link>
            </li>

        </ul>
      </nav>
    )
  }
  