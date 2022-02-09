import axios from 'axios';
import React, { useEffect } from 'react';
import { MOCK } from './data';

export default function Main() {
  // const APIKEY = 'bd5de54bb8eed93db96a311f088b9415';
  // const APICALL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKEY}`;

  // useEffect(() => {
  //   const data = async () => {
  //     let res;
  //     try {
  //       res = await axios.get(APICALL);
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     return res.data;
  //   };
  //   // data();
  // }, [APICALL]);
  console.log(MOCK);

  return (
    <>
      <h1>This is the main page</h1>
    </>
  );
}
