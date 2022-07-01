import {
  screen, render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import continentReducer from '../redux/continents/continents';
import countryReducer from '../redux/countries/country';
import Countries from '../components/Countries';
import Continents from '../components/Continents';
import { Router, BrowserRouter } from 'react-router-dom';
import App from '../App'

const mockStore = () => {
  const preloadedState = {
    continents: [
      {
        continentName: 'North America',
        countries: [
          'Anguilla',
          'Antigua and Barbuda',
          'Aruba',
          'Bahamas',
          'Barbados',
          'Belize',
          'Bermuda',
          'British Virgin Islands',
          'Canada',
          'Caribbean Netherlands',
          'Cayman Islands',
          'Costa Rica',
          'Cuba',
          'Curaçao',
          'Dominica',
          'Dominican Republic',
          'El Salvador',
          'Greenland',
          'Grenada',
          'Guadeloupe',
          'Guatemala',
          'Haiti',
          'Honduras',
          'Jamaica',
          'Martinique',
          'Mexico',
          'Montserrat',
          'Nicaragua',
          'Panama',
          'Saint Kitts and Nevis',
          'Saint Lucia',
          'Saint Martin',
          'Saint Pierre Miquelon',
          'Saint Vincent and the Grenadines',
          'Sint Maarten',
          'St. Barth',
          'Trinidad and Tobago',
          'Turks and Caicos Islands',
          'USA'
        ],
        activeCase: 5068821,
        criticalCases: 8643,
        RecoveredCases: 98848360,
        Death: 1487295,
        todayCases: 23182
      },
      {
        continentName: 'Asia',
        countries: [
          'Afghanistan',
          'Armenia',
          'Azerbaijan',
          'Bahrain',
          'Bangladesh',
          'Bhutan',
          'Brunei',
          'Cambodia',
          'China',
          'Cyprus',
          'Georgia',
          'Hong Kong',
          'India',
          'Indonesia',
          'Iran',
          'Iraq',
          'Israel',
          'Japan',
          'Jordan',
          'Kazakhstan',
          'Kuwait',
          'Kyrgyzstan',
          'Lao People\'s Democratic Republic',
          'Lebanon',
          'Macao',
          'Malaysia',
          'Maldives',
          'Mongolia',
          'Myanmar',
          'N. Korea',
          'Nepal',
          'Oman',
          'Pakistan',
          'Palestine',
          'Philippines',
          'Qatar',
          'S. Korea',
          'Saudi Arabia',
          'Singapore',
          'Sri Lanka',
          'Syrian Arab Republic',
          'Taiwan',
          'Tajikistan',
          'Thailand',
          'Timor-Leste',
          'Turkey',
          'UAE',
          'Uzbekistan',
          'Vietnam',
          'Yemen'
        ],
        activeCase: 4123989,
        criticalCases: 10525,
        RecoveredCases: 155682838,
        Death: 1439320,
        todayCases: 96561
      },
   ],
    countries: [
      {
        countryName: 'Afghanistan',
        activeCase: 10246,
        criticalCases: 1124,
        RecoveredCases: 164559,
        Death: 7723,
        todayCases: 98,
        todayDeaths: 1,
        flag: 'https://disease.sh/assets/img/flags/af.png'
      },
      {
        countryName: 'Albania',
        activeCase: 2528,
        criticalCases: 0,
        RecoveredCases: 274271,
        Death: 3499,
        todayCases: 0,
        todayDeaths: 0,
        flag: 'https://disease.sh/assets/img/flags/al.png'
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      continents: continentReducer,
      countries: countryReducer,
    },
  });
};

describe('Testing the Continents component', () => {
  test('When data fetched from API all 6 continents are rendering succesfully', () => {
    render(<Provider store={mockStore()}><BrowserRouter><Continents /></BrowserRouter> </Provider>);
    expect(screen.getAllByText("North America").length).toBeGreaterThanOrEqual(1);
  });

  test('When data fetched from API all 6 continents are rendering succesfully', () => {
    render(<Provider store={mockStore()}><BrowserRouter><Continents /></BrowserRouter> </Provider>);
    expect(screen.getAllByText("Asia").length).toBeGreaterThanOrEqual(1);
  });

  test('When data fetched from API all 6 continents are rendering succesfully', () => {
    render(<Provider store={mockStore()}><BrowserRouter><App /></BrowserRouter> </Provider>);
    fireEvent.click(screen.getAllByText("See More")[1])
    expect(screen.getByText("Afghanistan")).toBeInTheDocument();
  });
});