import React, {
    useState
} from 'react';

function UseStateDemo() {
    console.log('create UseStateDemo Funciton');
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({a:1, b:2})
    
    const changeObj = () => {
        obj.a = Math.random();
        console.log(obj);
        setObj({...obj});
    };
    return (
        <>
            <div className="use-state-wrapper">
                <button onClick={() => setCount(prevCount => --prevCount)}>-</button>
                <input className="count" onChange={e => setCount(e.target.value)} value={count}/>
                <button onClick={() => setCount(prevCount => ++prevCount)}>+</button>
            </div>
            <div className="use-state-wrapper">
                <button onClick={() => setObj({a:1})}>设置新对象</button>
                <button onClick={changeObj}>修改对象</button>
                <div>{JSON.stringify(obj)}</div>
            </div>
        </>
    );
}

export default UseStateDemo;
