import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {room.facilities.slice(0, 3).map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <div key={idx} className="flex items-center gap-1 text-sm text-gray-600">
                <Icon size={16} className="text-amber-600" />
                <span>{facility.name}</span>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <span className="text-2xl font-bold text-amber-600">₦{room.price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm ml-1">/night</span>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;