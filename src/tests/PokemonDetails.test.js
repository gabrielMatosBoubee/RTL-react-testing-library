import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('', () => {
  const { getByText,
    getByRole,
    getAllByAltText,
    getByLabelText } = renderWithRouter(<App />);
  const MoreDetails = getByText('More details');
  userEvent.click(MoreDetails);
  const nameDetails = getByRole('heading', { name: 'Pikachu Details', level: 2 });
  expect(nameDetails).toBeInTheDocument();
  const summaryDetails = getByRole('heading', { name: 'Summary', level: 2 });
  expect(summaryDetails).toBeInTheDocument();
  const summary = getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
  expect(summary).toBeInTheDocument();
  const locationDetails = getByRole('heading', { name: 'Game Locations of Pikachu', level: 2 });
  expect(locationDetails).toBeInTheDocument();
  const imgsLocation = getAllByAltText('Pikachu location');
  expect(imgsLocation[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(imgsLocation[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  const labelDetails = getByLabelText('Pokémon favoritado?');
  expect(labelDetails).toBeInTheDocument();
});
