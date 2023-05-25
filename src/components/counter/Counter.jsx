import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>you clicked {count}</p>
            <button
                onClick={() => setCount(count + 1)}>
                Increase count</button>
        </div>
    )
}

export default Counter
