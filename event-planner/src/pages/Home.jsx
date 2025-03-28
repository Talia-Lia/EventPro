import { Calendar, Users, DollarSign, PlusCircle } from 'lucide-react';

const Home = () => {
  const events = [];

  return (
    <div className="min-h-screen w-full px-6 py-10 text-black">
      <h1 className="text-3xl font-bold mb-8">Event Pro</h1>

    
      <div className="bg-white/30 backdrop-blur-sm shadow-md rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <button className="text-[#F4C542] flex items-center hover:text-[#FF8A00]">
            <PlusCircle className="mr-2" size={20} /> Create New Event
          </button>
        </div>

        {events.length === 0 ? (
          <p className="text-gray-700">No events yet. Start by creating one!</p>
        ) : (
          events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white/40 backdrop-blur rounded-lg p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{event.name}</h3>
                <p className="text-gray-700 text-sm">
                  {event.date} | {event.location}
                </p>
              </div>
              <span 
                className={`px-3 py-1 rounded-full text-xs ${
                  event.status === 'Planning' 
                    ? 'bg-blue-200 text-blue-800' 
                    : 'bg-green-200 text-green-800'
                }`}
              >
                {event.status}
              </span>
            </div>
          ))
        )}
      </div>


      <div className="bg-white/30 backdrop-blur-sm shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="mr-3 text-[#FF8A00]" size={24} />
              <span>Total Events</span>
            </div>
            <span className="font-bold">5</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Users className="mr-3 text-[#48A14D]" size={24} />
              <span>Total Guests</span>
            </div>
            <span className="font-bold">350</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <DollarSign className="mr-3 text-purple-600" size={24} />
              <span>Budget Allocated</span>
            </div>
            <span className="font-bold">$45,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
