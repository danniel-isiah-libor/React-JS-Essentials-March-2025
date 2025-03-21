import React from 'react'

function mainprofile() {
  return (
    <div>
      <img
        src={`//unsplash.it/seed/hd/500`}
        className="size-30 rounded-full ring-5 ring-gray-400 mx-auto"
      />
      <p className="font-bold text-lg my-5">Andrei Parquez</p>
      <div className="text-xs text-gray-400">
        <p>@Y4to</p>
        <p>andreijack@email.com</p>
      </div>
    </div>
  );
}

export default mainprofile