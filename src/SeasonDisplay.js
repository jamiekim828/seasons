import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat);
  //new Date().getMonth()
  //consider 0 index
  //so 4 means May
  //Northern Hemisphere: 3~8 hot, Southern Hemispdere: 9, 10, 11, 0, 1, 2 hot

  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);

  return <div>Season Display</div>;
};

export default SeasonDisplay;
