import React from 'react';
import CalculadoraTitulo from './calculadoratitulo';
import SalidaRespuesta from './salidarespuesta';
import Button from './button';
class Calculadora extends React.Component {
    constructor() {
        super();
        this.state = {
            pregunta: '',
            respuesta: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (this.state.pregunta !== '') {
                    var ans = '';
                    try {
                        ans = eval(this.state.pregunta);
                    } catch (error) {
                        this.setState({
                            respuesta: 'ocurrio un error'
                        });
                    }
                    if (ans === undefined)
                        this.setState({ respuesta: "ocurrio un error" });
                    else
                        this.setState({ respuesta: ans, pregunta: '' });
                    break;
                }
            }
            case 'Limpiar': {
                this.setState({ respuesta: "", pregunta: "" });
                break;
            }
            case 'Borrar': {
                var str = this.state.pregunta;
                str = str.substr(0, str.length - 1);
                this.setState({ pregunta: str });
                break;
            }
            default: {
                this.setState({ pregunta: this.state.pregunta += value });
                break;
            }
        }
    }
    render() {
        return (
            <div className="frame">
                <CalculadoraTitulo value="Calculadora Paloma" />
                <div class="mainCalc">
                    <SalidaRespuesta respuesta={this.state.respuesta} pregunta={this.state.pregunta} />
                    <div className="button-row">
                        <Button label={'Limpiar'} handleClick={this.handleClick} />
                        <Button label={'Borrar'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'7'} handleClick={this.handleClick} />
                        <Button label={'8'} handleClick={this.handleClick} />
                        <Button label={'9'} handleClick={this.handleClick} />
                        <Button label={'*'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick={this.handleClick} />
                        <Button label={'5'} handleClick={this.handleClick} />
                        <Button label={'6'} handleClick={this.handleClick} />
                        <Button label={'-'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick={this.handleClick} />
                        <Button label={'2'} handleClick={this.handleClick} />
                        <Button label={'3'} handleClick={this.handleClick} />
                        <Button label={'+'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'0'} handleClick={this.handleClick} />
                        <Button label={'='} handleClick={this.handleClick} />
                        <Button label={'.'} handleClick={this.handleClick} />
                        <Button label={'/'} handleClick={this.handleClick} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Calculadora;