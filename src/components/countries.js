import React from 'react';
import { useParams } from 'react-router-dom';
import Country from './country';

const Countries = () => {
  const { continent } = useParams();
  return (
    <>
      <Country continentName={continent} />
    </>
  );
};

export default Countries;
