import React from 'react';

const MenuItem = ({ name, price, video }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg transition-shadow hover:shadow-xl">
      <h2 className="mb-2 text-center text-xl font-semibold">
        {name} <span className="text-sm text-gray-500">({price})</span>
      </h2>
      <div className="relative h-72 w-full">
        <iframe
          src={video}
          title={name}
          className="h-full w-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onMouseOver={(e) =>
            e.target.contentWindow.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*'
            )
          }
          onMouseOut={(e) =>
            e.target.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              '*'
            )
          }
        ></iframe>
      </div>
    </div>
  );
};

export default MenuItem;
