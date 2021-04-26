import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

//import "jest-dom/extend-expect";

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    render(<Boton/ >, div)
   
})
