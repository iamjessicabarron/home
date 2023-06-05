import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a hello message', () => {
    render(<App />);
    const linkElement = screen.getByText(/hi, i'm jess/i);
    expect(linkElement).toBeInTheDocument();
});
