
import { useLoaderData } from 'react-router-dom';


const GameList = () => {
    const loadData = useLoaderData()
    console.log(loadData)
    return (
        <div>
            Game list
        </div>
    );
};

export default GameList;