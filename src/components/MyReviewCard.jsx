import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewCard = ({ myReview, setReviews, myReviews }) => {

   const handleDelete = _id => {
        // console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {

            fetch(`http://localhost:5000/review/${_id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your review has been deleted.",
                    icon: "success"
                  });
                  const remaining = myReviews.filter(myReview => myReview._id !== _id);
                  setReviews(remaining);
              }
            })
          }
        });
   }

    const { _id, name, review, } = myReview;

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
  <Link to={`/update-review/${_id}`} className="btn text-white font-semibold bg-green-400">Update</Link>
  <button onClick={()=> handleDelete(_id)} className="btn text-red-600 font-semibold bg-green-400"><RiDeleteBin6Line /></button>
</div>
 

       </div>
       </div>
    );
};

export default MyReviewCard;