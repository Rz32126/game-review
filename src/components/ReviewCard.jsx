import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const ReviewCard = ({review}) => {

    const { _id, photo, name, rating, publishing } = review

    return (
        <div>
            <div className="card lg:card-side bg-blue-200 mb-3">
  <figure>
    <img
      src={photo}
      className="w-48 h-60 mb-3 mx-14 rounded-md mt-3 object-cover"
      alt="Album"/>
  </figure>
  <div className="flex justify-around w-full mt-6">
    <div>
         <h2 className="card-title">Name: {name}</h2>
         <p>Rating: {rating}</p>
         <p>Publishing-Year: {publishing}</p>
         <Link to={`/details/${_id}`} className="btn bg-orange-500 w-36 mt-5">Explore Details</Link>
    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3">
        <button className="font-bold text-green-700">Share the Game</button>
        <button className="btn text-sky-600 text-2xl font-bold bg-blue-200"><CiFacebook /></button>
        <button className="btn text-red-600 text-2xl font-bold bg-blue-200"><CiTwitter /></button>
   </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReviewCard;