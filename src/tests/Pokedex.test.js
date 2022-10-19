import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  const { getByRole } = renderWithRouter(<App />);
  const pokeTitle = getByRole('heading', { name: 'Encountered pokémons', level: 2 });
  expect(pokeTitle).toBeInTheDocument();
});

test('Teste se a Pokédex tem os botões de filtro', () => {
  const { getAllByTestId } = renderWithRouter(<App />);
  const typesButtons = getAllByTestId('pokemon-type-button');
  expect(typesButtons).toHaveLength(7);
});

test('Teste se o botão Poison é clicavel', () => {
  const { getByRole, getAllByText } = renderWithRouter(<App />);
  const typeButton = getByRole('button', { name: 'Poison' });
  userEvent.click(typeButton);

  const pokePoison = getAllByText('Poison');
  expect(pokePoison).toHaveLength(2);
});

test('Teste se o botão All é clicavel', () => {
  const { getByRole } = renderWithRouter(<App />);
  const allButton = getByRole('button', { name: 'All' });
  userEvent.click(allButton);
});
