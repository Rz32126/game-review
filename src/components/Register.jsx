import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
 
const Register = () => {
    
    const { createNewUser, setUser, updateUserProfile, } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const name = form.get("name");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({ email, name, photo, password});

        if (password.length < 6) {
          setError({...error, password: "Password must be more than 6 characters"});
          return;
      }
      
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      
      if (!hasUpperCase || !hasLowerCase) {
          setError({...error, password: "Password must contain at least one uppercase and one lowercase letter"});
          return;
      }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                    fetch('https://assignment-10-server-lime-five.vercel.app/users', {
               method: 'POST',
               headers: {
                'content-type': 'application/json'
               },
               body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Email added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        })

        
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // setError({ general: errorMessage }); 
            // toast.error("Registration failed: " + errorMessage);
        });
    }    

    return (
        <div>
            <form onSubmit={handleRegister} className="card-body w-8/12 mx-auto bg-lime-400 mt-4 mb-4 rounded-md">
        <div className="form-control">
            <h1 className="font-bold text-center text-blue-800 text-xl">Register Form</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
            <div className="form-control relative">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name"
           type="text"
            placeholder="name" className="input input-bordered" required />
        </div>
            <div className="form-control relative">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input name="photo"
           type="text"
            placeholder="Photo url" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password"
           type="password"
            placeholder="password" className="input input-bordered" required />
            {error.password && <label className="label text-red-600">{error.password}</label>}
        </div>
        {/* {error.general && <label className="label text-red-600">{error.general}</label>} */}

        <div className="form-control mt-6">
          <button className="btn bg-blue-700 text-white">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold mb-3">
          Already Have an account? 
         <Link className="text-red-600 ml-2" to="/login">Login</Link>
     </p>
        </div>
    );
};

export default Register;