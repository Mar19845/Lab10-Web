import React, { Component } from 'react';
import './App.css';
import Boton from './utils/Boton';
import Input from './utils/Input';
import ClearBtn from './utils/ClearBTN';
import * as math from "mathjs";



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            signo:"",
            val1: "",
            val2:"",
            resultado:"",
        };
    }
    addInput(val){
        this.setState({ input: this.state.input + val });
    }
    
    Equal(){
        this.setState({ input: math.evaluate(this.state.input) });
    }
    
    render() {
        return (
            <div className="app">

                <div className="calculadora">
                    <Input input={this.state.input} />
                    <div className="fila">
                        <Boton addVal={()=>this.setState({input: this.state.input + 7})}>7</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 8})}>8</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 9})}>9</Boton>
                        <Boton addVal={()=>this.setState({signo: "/",val1:this.state.input,input: ""})}>/</Boton>
                    </div>
                    <div className="fila">
                        <Boton addVal={()=>this.setState({input: this.state.input + 4})}>4</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 5})}>5</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 6})}>6</Boton>
                        <Boton addVal={()=>this.setState({signo: "*",val1:this.state.input,input: ""})}>x</Boton>
                    </div>
                    <div className="fila">
                        <Boton addVal={()=>this.setState({input: this.state.input + 1})}>1</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 2})}>2</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 3})}>3</Boton>
                        <Boton addVal={()=>this.setState({signo: "+",val1:this.state.input,input: ""})}>+</Boton>
                    </div>
                    <div className="fila">
                        <Boton addVal={()=>this.setState({input: this.state.input + '.'})}>.</Boton>
                        <Boton addVal={()=>this.setState({input: this.state.input + 0})}>0</Boton>
                        <Boton addVal={()=>this.setState({input:math.evaluate(this.state.val1+this.state.signo+this.state.input)})}>=</Boton>
                        <Boton addVal={()=>this.setState({signo: "-",val1:this.state.input,input: ""})}>-</Boton>
                    </div>
                    <div className="fila">
                        <ClearBtn handleClear={() => this.setState({ input: "",val1:"",val2:"",signo:"",result:"" })}>
                            Borrar
                        </ClearBtn>
                        <Boton addVal={()=>this.setState({input: math.evaluate("-1 * " + this.state.input)})}>+/-</Boton>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
