import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/CEN_logo.png';
import { Home, Calendar, Users, DollarSign, LogIn, UserPlus, Search } from 'lucide-react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Event Pro Logo" 
              className="h-20 w-auto" 
            />
          </Link>

          <div className="flex space-x-6 text-black">
            <Link to="/" className="flex items-center hover:text-[#FF8A00]">
              <Home className="mr-2" size={20} /> Home
            </Link>
            <Link to="/budget" className="flex items-center hover:text-[#FF8A00]">
              <DollarSign className="mr-2" size={20} /> Budget
            </Link>
            <Link to="/guests" className="flex items-center hover:text-[#FF8A00]">
              <Users className="mr-2" size={20} /> Guests
            </Link>
            <Link to="/agenda" className="flex items-center hover:text-[#FF8A00]">
              <Calendar className="mr-2" size={20} /> Agenda
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="mr-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-2 py-2 border border-[#F4C542]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48A14D] text-sm bg-white text-black placeholder:text-gray-500"
                />
                <Search 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black" 
                  size={16} 
                />
              </div>
            </form>

            <Link 
              to="/login" 
              className="px-4 py-2 border border-[#F4C542] text-black rounded-lg hover:bg-[#F4C542] hover:text-white transition flex items-center"
            >
              <LogIn className="mr-2" size={20} /> Log In
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 border border-[#48A14D] text-black rounded-lg hover:bg-[#48A14D] hover:text-white transition flex items-center"
            >
              <UserPlus className="mr-2" size={20} /> Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
