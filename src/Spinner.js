import React from 'react';

const Spinner = (props) => {
  return (
    //semantic UI icon loader
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

// when there is no message props coming from parent
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
