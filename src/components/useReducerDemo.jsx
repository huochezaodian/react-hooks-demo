import React, {
    useReducer
} from 'react';
import reducer, {
    initState
} from './../reducer';

const actions = {
    increment: count => ({
        type: 'INCREMENT',
        count
    }),
    decrement: count => ({
        type: 'INCREMENT',
        count
    }),
    change: count => ({
        type: 'INCREMENT',
        count
    }),
}

function UseReducerDemo() {
    console.log('create UseReducerDemo Funciton');
    const [state, dispatch] = useReducer(reducer, initState);
    const count = state.count;
    return (
        <div className="use-state-wrapper">
            <button onClick={() => dispatch(actions.decrement(count - 1))}>-</button>
            <input className="count" onChange={e => dispatch(actions.change(e.target.value))} value={count}/>
            <button onClick={() => dispatch(actions.increment(count + 1))}>+</button>
        </div>
    );
}

export default UseReducerDemo;
