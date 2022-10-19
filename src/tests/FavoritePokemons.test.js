import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../pages';

test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
  const { getByText } = renderWithRouter(<FavoritePokemons />);
  const unfoundFav = getByText(/no favorite pokemon found/i);
  expect(unfoundFav).toBeInTheDocument();
});

// test('', () =>)
