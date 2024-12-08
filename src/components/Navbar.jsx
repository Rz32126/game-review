import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-orange-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link to="/">Home</Link>
        <Link to="/all-reviews">All Reviews</Link>
        <Link to="/add-review">Add Review</Link>
        <Link to="/my-review">My Reviews </Link>
        <Link to="/game-list">Game-WatchList </Link>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Rating</a></li>
            <li><a>Year</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-xl text-red-700">GameZone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 font-semibold mt-4">
        <Link to="/">Home</Link>
        <Link to="/all-reviews">All Reviews</Link>
        <Link to="/add-review">Add Review</Link>
        <Link to="/my-review">My Reviews </Link>
        <Link to="/game-list">Game-WatchList </Link>
        <Link to="/">Users </Link>

      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Rating</a></li>
            <li><a>Year</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link to="/login" className="btn bg-green-600 text-white">Login</Link>
    <a className="btn bg-red-500 text-white">Logout</a>
  </div>
</div>      
        </div>
    );
};

export default Navbar;