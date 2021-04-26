import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import App from './App';

//import "jest-dom/extend-expect";
afterEach(cleanup);

describe("Todo App", () => {
    
    it("Prueba agrega los numeros funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("2"))
        expect(getByTestId("input")).toHaveTextContent("92")
    })
    it("Prueba agrega los puntos  funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("."))
        fireEvent.click(getByText("2"))
        expect(getByTestId("input")).toHaveTextContent("9.2")
    })
    it("Prueba suma funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("2"))
        fireEvent.click(getByText("+"))
        fireEvent.click(getByText("3"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("5")
    })
    it("Prueba resta funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("-"))
        fireEvent.click(getByText("3"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("6")
    })

    it("Prueba multiplicacion funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("x"))
        fireEvent.click(getByText("3"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("27")
    })
    
    it("Prueba division funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("/"))
        fireEvent.click(getByText("3"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("3")
    })
    it("Prueba modulo funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("%"))
        fireEvent.click(getByText("2"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("1")
    })
    it("Prueba cambio  de signo funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("+/-"))
        expect(getByTestId("input")).toHaveTextContent("-9")
    })
    it("Prueba borrar memoria  de signo funnciona",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("9"))
        fireEvent.click(getByText("Borrar"))
        expect(getByTestId("input")).toHaveTextContent("")
    })
});