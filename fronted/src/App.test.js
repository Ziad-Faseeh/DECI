import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders products fetched from server', async () => {
  const fakeProducts = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ];

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeProducts),
    })
  );

  await act(async () => {
    render(<App />);
  });

  const productElement = await screen.findByText(/Product 1 - \$100/i);
  expect(productElement).toBeInTheDocument();


  global.fetch.mockRestore();
});