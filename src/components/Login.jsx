import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { userLogin,setUser } = useContext(AuthContext);
    const [error,setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});

        userLogin(email,password)
        .then(result => {
          const user = result.user;
          setUser(user);
          navigate(location?.state? location.state : "/");
        })

          const lastLoginTime = result?.user?.metadata?.lastLoginTime;

                const loginInfo = {email, lastLoginTime};

                fetch(`https://assignment-10-server-lime-five.vercel.app/users/${email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res=> res.json())
                .then(data => {
                    console.log('register', data)
                })
        .catch (err => {
            setError({...error, login: err.code});
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
            {
              error.login && (
                <label className='label text-red-500'>{error.login}</label>
              )
            }
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