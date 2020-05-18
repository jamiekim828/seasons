import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake',
  },
};

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

  //   const text =
  //     season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

  //   const icon = season === 'winter' ? 'snowflake' : 'sun';

  const { text, iconName } = seasonConfig[season]; // {text, iconName}

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
