import { CiFacebook } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

const MyReviewCard = ({myReview}) => {

    const { name, review, } = myReview;

    return (
        <div>
          <div className="card lg:card-side bg-orange-200 mb-3 flex justify-between">
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="font-bold text-black">Name</th>
        <th className="font-bold text-black">Review</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-red-500">{name}</td>
        <td>{review}</td>
      </tr>
     
     
    </tbody>
  </table>
</div>
<div className="join join-vertical lg:join-horizontal gap-3 mt-3 mr-8">
  <button className="btn text-white font-semibold bg-green-400">Update</button>
  <button className="btn text-red-600 font-semibold bg-green-400"><RiDeleteBin6Line /></button>
</div>
 

       </div>
       </div>
    );
};

export default MyReviewCard;