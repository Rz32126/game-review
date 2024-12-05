

const AddReview = () => {
    const handleAddReview = event => {
        event.preventDefault()

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const publishing = form.publishing.value;

        const newAddReview = { photo, name, review, rating, publishing }
        console.log(newAddReview)
    }
    
    return (
        <div className="w-10/12 bg-orange-100 mx-auto">
        <h1 className="text-2xl mt-7 font-bold text-center">Add Your Game Review</h1>  
       <form onSubmit={handleAddReview}>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Game Cover Image</span>
            </label>
            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Game Title</span>
            </label>
            <input type="string" name="name" placeholder="Game name" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Review Description</span>
            </label>
            <input type="text" name="review" placeholder="Write your review description here" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <input type="number" name="rating" placeholder="Rating (e.g., 1-5 or 1-10)" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Publishing Year</span>
            </label>
            <input type="text" name="publishing" placeholder="2023" className="input input-bordered" required />
         </div>
         <div className="dropdown dropdown-bottom">
         <div tabIndex={0} role="button" className="btn ml-9 mt-3">Select One</div>
         <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>User Name</a></li>
            <li><a>User Email</a></li>
         </ul>
        </div>
        <br></br>
         <input type="submit" value="Submit Review" className="btn btn-block bg-red-400 mb-5 mt-3"></input>
       </form>
        
    

        </div>
    );
};

export default AddReview;