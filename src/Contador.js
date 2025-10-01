import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState("");
    const incrementar = () => setContador((parseInt(contador) || 0) + 1 + "");
    const agregarNumero = (num) => setContador(contador + num);


    
    return (
        <div id ="contador">
            <label>Contador: {contador}</label>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={() => setContador("")}>Reset</button>
            <button onClick={() =>agregarNumero("1")}>1</button>
            <button onClick={() =>agregarNumero("2")}>2</button>
            <button onClick={() =>agregarNumero("3")}>3</button>
            <button onClick={() =>agregarNumero("4")}>4</button>
            <button onClick={() =>agregarNumero("5")}>5</button>
            <button onClick={() =>agregarNumero("6")}>6</button>
            <button onClick={() =>agregarNumero("7")}>7</button>
            <button onClick={() =>agregarNumero("8")}>8</button>
            <button onClick={() =>agregarNumero("9")}>9</button>
            <button onClick={() =>agregarNumero("0")}>0</button>
            <button onClick={() =>agregarNumero("+")}>+</button>
            <button onClick={() =>agregarNumero("-")}>-</button>
        </div>
    );
}

export default Contador;