import React from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
  // const location = useLocation();
  // const { pathname } = location;
  // const continentName = pathname.split('/')[1];
  const { continent } = useParams();
  console.log('selectedContinent', continent);
  return (
    <>
      <Country continentName={continent} />
    </>
  );
};

export default Countries;
