// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState,Fragment } from 'react';

// import all the components we are going to use

//importing library to use Stopwatch and Timer
import { Stopwatch } from 'react-native-stopwatch-timer';

const Reloj = ({isStopwatchStart,resetStopwatch,getTime}) => {


/*getTime={(time) => {
              handletiempo(time);
            }}*/ 

  return (
        <Fragment>
          <Stopwatch
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={(time) => {
              getTime(time);
            }}
            
          />
        </Fragment>
  );
};

const options = {
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 100,
    height:40,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    marginLeft: 7,
    width:100
  },
};

export default Reloj;
