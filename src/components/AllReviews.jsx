import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const reviews = useLoaderData()
    // console.log(reviews)
    return (
        <div className='w-9/12 mx-auto'>
            <h2 className='text-center mt-3 font-bold text-xl'>You can find Games review here</h2>
            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
            
        </div>
    );
};

export default AllReviews;