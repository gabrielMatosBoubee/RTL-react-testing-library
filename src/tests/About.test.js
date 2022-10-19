import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
import renderWithRouter from './renderWithRouter';
import { About } from '../pages';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  const { getByText } = renderWithRouter(<About />);
  const pokedexText = getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');
  expect(pokedexText).toBeInTheDocument();
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  const { getByRole } = renderWithRouter(<About />);
  const pokedexText = getByRole('heading', { name: 'About Pokédex', level: 2 });
  expect(pokedexText).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  const { getAllByText } = renderWithRouter(<About />);
  const pokedexTexts = getAllByText(/Pokémons/i);
  expect(pokedexTexts).toHaveLength(2);
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  const { getByAltText } = renderWithRouter(<About />);
  const img = getByAltText(/Pokédex/i);
  expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
