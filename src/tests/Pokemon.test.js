import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Teste se é renderizado um card com as informações de determinado pokémon:', () => {
  const { getByText, getByTestId, getByAltText } = renderWithRouter(<App />);
  const firstPkName = getByText('Pikachu');
  expect(firstPkName).toBeInTheDocument();
  const firstPkType = getByTestId('pokemon-type');
  expect(firstPkType).toHaveTextContent('Electric');
  const averageWeightPk = getByText('Average weight: 6.0 kg');
  expect(averageWeightPk).toBeInTheDocument();
  const firstPkImg = getByAltText('Pikachu sprite');
  expect(firstPkImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('Teste se é renderizado um card com as informações de determinado pokémon:', () => {
  const { getByAltText, getByText, history } = renderWithRouter(<App />);
  const MoreDetails = getByText('More details');
  userEvent.click(MoreDetails);
  const pkTextFav = getByText('Pokémon favoritado?');
  userEvent.click(pkTextFav);
  const favPkImg = getByAltText('Pikachu is marked as favorite');
  expect(favPkImg.src).toBe('http://localhost/star-icon.svg');
  //   const firstPkId = getByText('pokemons/25');
  expect(history.location.pathname).toBe('/pokemons/25');
});
