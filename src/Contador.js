import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState("0");
    const incrementar = () => setContador(Number(contador + 1));
    const agregarNumero = (num) => {
        if (contador === "0" && num !== "+" && num !== "-" && num !== "*" && num !== "/" && num !== "." && num !== "%") {
            setContador(num);
        } else {
            setContador(contador + num);
        }

        if (/[+\-*/.%]$/.test(contador) && /[+\-*/.%]$/.test(num)) {
            setContador(contador.slice(0, -1) + num);
        }

    };

    const total = () => setContador(eval(contador));
    const borrar = () => setContador(contador.slice(0, -1) || "0");
    
    return (
        <div id ="contador">
            <label>Contador: {contador}</label>
            <button className="operador" onClick={() =>setContador("0")}>AC</button>
            <button className="operador" onClick={borrar}>C</button>
            <button className="operador" onClick={() =>agregarNumero("%")}>%</button>
            <button className="operador" onClick={() =>agregarNumero("/")}>/</button>
            <button onClick={() =>agregarNumero("7")}>7</button>
            <button onClick={() =>agregarNumero("8")}>8</button>
            <button onClick={() =>agregarNumero("9")}>9</button>
            <button className="operador" onClick={() =>agregarNumero("*")}>*</button>
            <button onClick={() =>agregarNumero("4")}>4</button>
            <button onClick={() =>agregarNumero("5")}>5</button>
            <button onClick={() =>agregarNumero("6")}>6</button>
            <button className="operador" onClick={() =>agregarNumero("-")}>-</button>
            <button onClick={() =>agregarNumero("1")}>1</button>
            <button onClick={() =>agregarNumero("2")}>2</button>
            <button onClick={() =>agregarNumero("3")}>3</button>
            <button className="operador" onClick={() =>agregarNumero("+")}>+</button>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={() =>agregarNumero("0")}>0</button>
            <button onClick={() =>agregarNumero(".")}>.</button>
            <button className="total" onClick={total}>=</button>
        </div>
    );
}

export default Contador;