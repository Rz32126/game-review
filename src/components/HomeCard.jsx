import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const HomeCard = ({ homeCard }) => {
    const { _id, photo, name, rating, } = homeCard
    return (
        <div>
      <div className="card lg:card-side bg-orange-300 mb-3">
  <figure>
    <img
      src={photo}
      className="w-48 h-60 mb-3 mx-14 rounded-full mt-3 object-cover"
      alt="Album"/>
  </figure>
  <div className="flex justify-around w-full mt-6">
    <div>
         <h2 className="card-title text-red-600">Name: {name}</h2>
         <p>Rating: {rating}</p>
         <p className="flex mt-2">2 days ago : 7k<span className="mt-1 ml-2"><FcLike /></span></p>
         <Link to={`/details/${_id}`} className="btn bg-orange-600 text-white w-36 mt-5">Explore Details</Link>
    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3">
        <button className="font-bold text-green-700">Share the Game</button>
        <button className="btn text-red-600 text-2xl font-bold bg-blue-200"><CiFacebook></CiFacebook><CiTwitter /></button>
        <button className="btn text-sky-600 font-bold bg-blue-200">Play Now</button>
   </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeCard;