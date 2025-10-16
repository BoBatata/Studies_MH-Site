import { useEffect, useState } from "react";
import Card from '../components/Card'

export default function Home()
{
    const [mhMonsters, setMhMonsters] = useState([]);

    const API = import.meta.env.VITE_GITHUB_API;

    useEffect(() => {
        fetch(`https://mhw-db.com/monsters`)
        .then(res => res.json())
        .then(data => {setMhMonsters(data)})

    }, [])

    return(
    <div>
        <h1 className="text-3xl font-bold text-center mb-8">Monsters</h1>

        <>
        {mhMonsters.map(getItem => (
            <Card key={getItem.id} {...getItem}/>
        ))}
        </>
    </div>
    );
}