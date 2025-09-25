import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);  
    const incrementar = () => setContador(contador + 1);

    return (
        <div id ="contador">
            <label>Contador: {contador}</label>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default Contador;