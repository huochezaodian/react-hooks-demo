import React, {
    useState,
    createContext,
    useContext
} from 'react';

const ProviderContext = createContext('provider');

function UseContextDemo() {
    console.log('create UseContextDemo Funciton');
    const [count, setCount] = useState(0);
    
    return (
        <ProviderContext.Provider value={{count, setCount}}>
            <div className="use-state-wrapper">
                <button onClick={() => setCount(prevCount => --prevCount)}>-</button>
                <input className="count" onChange={e => setCount(e.target.value)} value={count}/>
                <button onClick={() => setCount(prevCount => ++prevCount)}>+</button>
            </div>
            <Child context={ProviderContext}></Child>
        </ProviderContext.Provider>
    );
}

function Child({context}) {
    const {count, setCount} = useContext(context);
    return (
        <>
            <div>context: {count}</div>
            <button onClick={() => setCount(200)}>设置count为200</button>
        </>
    );
}

export default UseContextDemo;
