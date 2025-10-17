import {Link} from "react-router-dom"

export default function Header(){
    return(
    <header className="bg-stone-900 text-white shadow p-4 flex justify-between items-center">
        <Link to="/">
        <h1 className="text-xl font-bold">Home</h1>
        </Link>
        <nav className="space-x-4">
            <Link to="/about" className="text-gray-400 hover:underline">Sobre</Link>
        </nav>
    </header>
    );
}