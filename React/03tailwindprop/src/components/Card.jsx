import React from 'react'

function Card({username="Menon"}) {
  return (
    <div>
      <div className="max-w-sm mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            className="w-full h-48 object-cover sm:h-56 md:h-64"
            src="https://images.pexels.com/photos/10392249/pexels-photo-10392249.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Card Image"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h2>
            <p className="text-gray-600 text-sm mb-4">
              This is a responsive card built with Tailwind CSS. Resize the
              window to see how it adapts. Written by {username}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card