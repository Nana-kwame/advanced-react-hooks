import * as React from 'react';

const countReducer = (state, action) => {
    const { type, step } = action
    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + step
            }

        default:
            break;
    }
}

function Counter({ initialCount = 0, step = 1 }) {
    const [state, dispatch] = React.useReducer(countReducer, {
        count: initialCount
    })

    const { count } = state

    const increment = () => dispatch({ type: 'INCREMENT', step });

    return <button onClick={increment}>{count}</button>
}

function App() {
    return <Counter />
};

export default App