import { useState } from "react";

function Counter () {
    // let count = 0;
    // here count is a simple variable which does not provide memory 

    // count is a state which provides memory and fucntion setCount to update count state
    let [count, setCount] = useState(0);

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={ () => setCount(count+1)}>Click me</button> 
    </div>
    )
}

export { Counter }