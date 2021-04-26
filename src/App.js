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
                    <Input  input={this.state.input} />
                    <div className="fila">
                        <Boton data-testid="Num7" addVal={()=>this.setState({input: this.state.input + 7})}>7</Boton>
                        <Boton data-testid="Num8" addVal={()=>this.setState({input: this.state.input + 8})}>8</Boton>
                        <Boton data-testid="Num9" addVal={()=>this.setState({input: this.state.input + 9})}>9</Boton>
                        <Boton data-testid="div" addVal={()=>this.setState({signo: "/",val1:this.state.input,input: ""})}>/</Boton>
                    </div>
                    <div className="fila">
                        <Boton data-testid="Num4" addVal={()=>this.setState({input: this.state.input + 4})}>4</Boton>
                        <Boton data-testid="Num5" addVal={()=>this.setState({input: this.state.input + 5})}>5</Boton>
                        <Boton data-testid="Num6" addVal={()=>this.setState({input: this.state.input + 6})}>6</Boton>
                        <Boton data-testid="mul" addVal={()=>this.setState({signo: "*",val1:this.state.input,input: ""})}>x</Boton>
                    </div>
                    <div className="fila">
                        <Boton data-testid="Num1" addVal={()=>this.setState({input: this.state.input + 1})}>1</Boton>
                        <Boton data-testid="Num2" addVal={()=>this.setState({input: this.state.input + 2})}>2</Boton>
                        <Boton data-testid="Num3" addVal={()=>this.setState({input: this.state.input + 3})}>3</Boton>
                        <Boton data-testid="suma" addVal={()=>this.setState({signo: "+",val1:this.state.input,input: ""})}>+</Boton>
                    </div>
                    <div className="fila">
                        <Boton data-testid="punto" addVal={()=>this.setState({input: this.state.input + '.'})}>.</Boton>
                        <Boton data-testid="Num0" addVal={()=>this.setState({input: this.state.input + 0})}>0</Boton>
                        <Boton data-testid="equal" addVal={()=>this.setState({input:math.evaluate(this.state.val1+this.state.signo+this.state.input)})}>=</Boton>
                        <Boton data-testid="resta" addVal={()=>this.setState({signo: "-",val1:this.state.input,input: ""})}>-</Boton>
                    </div>
                    <div className="fila">
                        <ClearBtn data-testid="clear" handleClear={() => this.setState({ input: "",val1:"",val2:"",signo:"",result:"" })}>
                            Borrar
                        </ClearBtn>
                        <Boton data-testid="MasMenos" addVal={()=>this.setState({input: math.evaluate("-1 * " + this.state.input)})}>+/-</Boton>
                        <Boton data-testid="modulo" addVal={()=>this.setState({signo: "%",val1:this.state.input,input: ""})}>%</Boton>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
