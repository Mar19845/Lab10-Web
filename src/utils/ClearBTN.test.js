import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import ClearBTN from './ClearBTN';

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<ClearBTN />, div)
})