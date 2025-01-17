import * as React from 'react';

function countReducer(state, newState) {
    return state + newState
};

function Counter({ initialCount = 0, step = 1 }) {
    const [count, setCount] = React.useReducer(countReducer, initialCount);

    const increment = () => setCount(step)
    return <button onClick={increment}>{count}</button>
}

function App() {
    return <Counter />
};

export default App
