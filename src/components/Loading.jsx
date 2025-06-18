import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96">
      <TailSpin
        height={80}
        width={80}
        color="#00BFFF"
        ariaLabel="loading"
      />
     </div>
  );
};
