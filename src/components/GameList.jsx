import { useLoaderData } from 'react-router-dom';


const GameList = () => {
    // console.log(selectedReviews)
    const loadData = useLoaderData()
    console.log(loadData)
    // const { _id, photo, name, review, rating, publishing } = loadData

    // const [selectedReviews, setSelectedReview] = useState([])

    // const handleSelected = (watchList) => {
    // //    console.log(watchList)
    //   const addWatchList = [...selectedReviews,watchList];
    //   setSelectedReview(addWatchList)
    // }
  
    return (
        <div>
           ok

       </div>
    );
};

export default GameList;