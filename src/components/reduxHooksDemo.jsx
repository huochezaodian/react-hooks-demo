import React from 'react';
import {
    useSelector,
    useDispatch,
    useStore
} from 'react-redux';

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
};

function ReduxHooksDemo() {
    console.log('create ReduxHooksDemo Funciton');

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const store = useStore();
    console.log('store:', store);
    
    return (
        <div className="use-state-wrapper">
            <button onClick={() => dispatch(actions.decrement(count - 1))}>-</button>
            <input className="count" onChange={e => dispatch(actions.change(e.target.value))} value={count}/>
            <button onClick={() => dispatch(actions.increment(count + 1))}>+</button>
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
})
  
const mapDispatchToProps = dispatch => ({
    increment: count => dispatch(actions.increment(count)),
    decrement: count => dispatch(actions.decrement(count)),
    change: count => dispatch(actions.change(count))
})

export default ReduxHooksDemo;
