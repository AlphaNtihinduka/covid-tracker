import React from 'react';
import { useParams } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
  const { continent } = useParams();
  // console.log('selectedContinent', continent);
  return (
    <>
      <Country continentName={continent} />
    </>
  );
};

export default Countries;
