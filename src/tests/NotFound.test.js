import React from 'react';
import { NotFound } from '../pages';
import renderWithRouter from './renderWithRouter';

test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const titleText = getByRole('heading', { name: 'Page requested not found', level: 2 });
  expect(titleText).toBeInTheDocument();
});

test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  const { getByAltText } = renderWithRouter(<NotFound />);
  const img = getByAltText(/Pikachu crying because the page requested was not found/i);
  expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
