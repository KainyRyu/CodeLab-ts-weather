import React, { useEffect } from 'react';
import { getDataFromLocalStorage, setLocalStorage } from 'helper';
import { CITY } from 'data';

interface ListProps {
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
}

export default function List({ setSelectedLocation }: ListProps) {
  useEffect(() => {
    setLocalStorage('locationList', JSON.stringify(CITY));
  }, []);

  const getItem: any = getDataFromLocalStorage('locationList');
  const list: string[] = JSON.parse(getItem);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <ul>
        {list?.map((city: any, idx: number) => (
          <li key={idx}>
            <button onClick={onClick}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
