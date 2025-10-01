import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);  
    const incrementar = () => setContador(contador + 1);
    const InputNumber = (num) => setContador(num);

    return (
        <div id ="contador">
            <label>Contador: {contador}</label>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={() =>InputNumber(1)}>1</button>
            <button onClick={() =>InputNumber(2)}>2</button>
            <button onClick={() =>InputNumber(3)}>3</button>
            <button onClick={() =>InputNumber(4)}>4</button>
            <button onClick={() =>InputNumber(5)}>5</button>
            <button onClick={() =>InputNumber(6)}>6</button>
            <button onClick={() =>InputNumber(7)}>7</button>
            <button onClick={() =>InputNumber(8)}>8</button>
            <button onClick={() =>InputNumber(9)}>9</button>
            <button onClick={() =>InputNumber(0)}>0</button>
            
            
        </div>
    );
}

export default Contador;