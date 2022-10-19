import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../pages';

test('testa se existe os links', () => {
  const { history, getByText } = renderWithRouter(<App />);
  const linkNav = (texto) => getByText(texto);
  const { location: { pathname } } = history;
  expect(linkNav('Home')).toBeInTheDocument();
  expect(linkNav('About')).toBeInTheDocument();
  expect(linkNav('Favorite Pokémons')).toBeInTheDocument();
  expect(pathname).toBe('/');
});

test('testa se ao clicar no link Home volta para a pagina principal', () => {
  const { history, getByText } = renderWithRouter(<App />);
  const linkHome = getByText('Home');
  userEvent.click(linkHome);
  expect(history.location.pathname).toBe('/');
});

test('testa se ao clicar no link "About" volta para a pagina sobre', () => {
  const { history, getByText } = renderWithRouter(<App />);
  const linkAbout = getByText('About');
  userEvent.click(linkAbout);
  expect(history.location.pathname).toBe('/about');
});

test('testa se ao clicar no link "Favorite Pokémons" volta para a pagina favorites', () => {
  const { history, getByText } = renderWithRouter(<App />);
  const linkPK = getByText('Favorite Pokémons');
  userEvent.click(linkPK);
  expect(history.location.pathname).toBe('/favorites');
});

test('testa se ao entrar em uma url diferente ele cai em not found', () => {
  const { getByText } = renderWithRouter(<NotFound />);
  const pageNotFound = getByText('Page requested not found');
  expect(pageNotFound).toBeInTheDocument();
});
