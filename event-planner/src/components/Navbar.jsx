import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-800">Event Planner</h1>

          {}
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/budget" className="text-gray-700 hover:text-blue-500">Budget</Link>
            <Link to="/guests" className="text-gray-700 hover:text-blue-500">Guests</Link>
            <Link to="/agenda" className="text-gray-700 hover:text-blue-500">Agenda</Link>
          </div>

          {}
          <div className="flex space-x-4">
            <Link to="/login" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
