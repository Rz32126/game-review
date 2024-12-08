import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {

    const {createNewUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});

        createNewUser(email,password)
        .then(result => {
            console.log(result.user)
            const newUser = { email }

            fetch('http://localhost:5000/users', {
               method: 'POST',
               headers: {
                'content-type': 'application/json'
               },
               body: JSON.stringify(newUser)
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
        .catch (error => {
            console.log('error', error)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 mt-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-gray-400 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <h1 className="font-bold text-center text-blue-800 text-xl">Login Form</h1>
            {/* <div className="form-control relative">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name"
           type="text"
            placeholder="name" className="input input-bordered" required />
        </div> */}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password"
           type="password"
            placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-700 text-white">Login</button>
          <button
             className="mt-2 btn bg-gray-300 text-green-500">
            <FaGoogle /> Login With Google
         </button>
        </div>
      </form>
      <p className="text-center font-semibold mb-3">Don't Have Account.<Link className="text-red-600 ml-2" to="/register">Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;