import { useLoaderData } from "react-router-dom";
import MyReviewCard from "./MyReviewCard";
import { useState } from "react";



const MyReview = () => {
    const loadedReviews = useLoaderData()
    const [myReviews, setReviews] = useState(loadedReviews);
    console.log(myReviews)
    return (
        <div className="w-9/12 mx-auto">
            <h1 className="text-xl font-bold text-center mt-4">Some of my Reviews</h1>
            {
                myReviews.slice(0, 4).map(myReview => <MyReviewCard key={myReview._id} myReview={myReview} myReviews={myReviews} setReviews={setReviews} ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;