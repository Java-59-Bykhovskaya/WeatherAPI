import Form from './Form';
import Weather from './Weather';
import { useState } from 'react';

const Data = () => {
    const [city, setCity] = useState({});
  return (
    <div className={'col-sm-7 form'}>
      <Form setCity={setCity}/>
      <Weather city={city.name} timeStamp={city.timeStamp}/>
    </div>
  );
};

export default Data;
