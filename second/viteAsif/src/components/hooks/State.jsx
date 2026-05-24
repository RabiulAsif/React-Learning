import { useState } from "react";

export const State = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        // setCount((prevCount) => prevCount + 1);
    };

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};