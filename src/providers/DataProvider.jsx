import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [selectedReviews, setSelectedReview] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-server-lime-five.vercel.app/review')
        .then((res)=>res.json())
        .then((data)=>setSelectedReview(data))
    },[])

    const handleSelectedReview = (watchList) => {
    //    console.log(watchList)
      const addWatchList = [...selectedReviews,watchList];
      setSelectedReview(addWatchList)
    }

    const dataInfo = {
        selectedReviews,
        handleSelectedReview
    };

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;