import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateReview = () => {
    const update = useLoaderData();
    // console.log(update)
    const { _id, photo, name, review, rating, publishing } = update
    const handleUpdateReview = event => {
        event.preventDefault()

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const publishing = form.publishing.value;

        const newUpdateReview = { photo, name, review, rating, publishing }
        console.log(newUpdateReview)

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdateReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="w-10/12 bg-green-500 mx-auto">
        <h1 className="text-2xl mt-7 font-bold text-center">Update Your Game Review</h1>  
       <form onSubmit={handleUpdateReview}>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Game Cover Image</span>
            </label>
            <input type="text" name="photo" defaultValue={photo} placeholder="photo url" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Game Title</span>
            </label>
            <input type="string" name="name" defaultValue={name} placeholder="Game name" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Review Description</span>
            </label>
            <input type="text" name="review" defaultValue={review} placeholder="Write your review description here" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <input type="number" name="rating" defaultValue={rating} placeholder="Rating (e.g., 1-5 or 1-10)" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Publishing Year</span>
            </label>
            <input type="text" name="publishing" defaultValue={publishing} placeholder="2023" className="input input-bordered" required />
         </div>
         <div className="dropdown dropdown-bottom">
         <div tabIndex={0} role="button" className="btn ml-9 mt-3">Select One</div>
         <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>User Name</a></li>
            <li><a>User Email</a></li>
         </ul>
        </div>
        <br></br>
         <input type="submit" value="Update Review" className="btn btn-block bg-yellow-400 mb-5 mt-3"></input>
       </form>
        
    

        </div>
    );
};

export default UpdateReview;