import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState("0");
    const incrementar = () => setContador(String(contador + 1));
    const agregarNumero = (num) => {
        if (contador === "0") {
            setContador(num);
        } else {
            setContador(contador + num);
        }
    };

    const total = () => setContador(eval(contador));

    
    return (
        <div id ="contador">
            <label>Contador: {contador}</label>
            <button onClick={() =>agregarNumero("+")}>+</button>
            <button onClick={() =>agregarNumero("1")}>1</button>
            <button onClick={() =>agregarNumero("2")}>2</button>
            <button onClick={() =>agregarNumero("-")}>-</button>
            <button onClick={() =>agregarNumero("3")}>3</button>
            <button onClick={() =>agregarNumero("4")}>4</button>
            <button onClick={() =>agregarNumero("*")}>*</button>
            <button onClick={() =>agregarNumero("5")}>5</button>
            <button onClick={() =>agregarNumero("6")}>6</button>
            <button onClick={() =>agregarNumero("/")}>/</button>
            <button onClick={() =>agregarNumero("7")}>7</button>
            <button onClick={() =>agregarNumero("8")}>8</button>
            <button onClick={() =>agregarNumero(".")}>.</button>
            <button onClick={() =>agregarNumero("9")}>9</button>
            <button onClick={() =>agregarNumero("0")}>0</button>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={() =>setContador("0")}>Reset</button>
            <button onClick={total}>=</button>
        </div>
    );
}

export default Contador;