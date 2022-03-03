import { CITIES } from 'data';
import { getDataFromSessionStorage, setSessionStorage } from 'helper';
import React, { useEffect } from 'react';

export default function List() {
  useEffect(() => {
    setSessionStorage('locationList', CITIES);
  }, []);

  const list: any = getDataFromSessionStorage('locationList');
  return (
    <div>
      <ul>
        {list.map((city: any) => (
          <li>{city.location}</li>
        ))}
      </ul>
    </div>
  );
}
