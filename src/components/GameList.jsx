import { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';


const GameList = () => {

    const {selectedReviews} = useContext(DataContext)
  
    return (
        <div>
          {
            selectedReviews.map(review => <div>
    <div className="w-9/12 mx-auto mt-5 card lg:card-side bg-gray-600 text-white mb-3">
  <figure>
    <img
      src={review.photo}
      className="w-40 h-32 mb-3 mx-14 rounded-full mt-3 object-cover"
      alt="Album"/>
  </figure>
  <div className="flex justify-around w-full mt-6">
    <div>
         <h2 className="card-title text-white text-2xl">Name: {review.name}</h2>
         <p>Review: {review.review}</p>
         <div className='flex gap-2'>
         <img src={review.photo} className='rounded-full w-12 h-12 object-cover'></img>
         <p className='mt-4'>Name: Jone tellas</p>
         </div>
         <p>Email: Jonetell34@gmail.com</p>

    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3">
        <button className="bg-purple-950 px-2 py-2 font-bold text-white rounded-md">Watch Video</button>
   </div>
    </div>
       
  </div>
</div> 
            </div>)
          }
       </div>
    );
};

export default GameList;