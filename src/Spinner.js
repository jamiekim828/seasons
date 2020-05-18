import React from 'react';

const Spinner = () => {
  return (
    //semantic UI icon loader
    <div className='ui active dimmer'>
      <div className='ui big text loader'>Loading...</div>
    </div>
  );
};

export default Spinner;
