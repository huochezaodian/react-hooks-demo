import React, {
    useState,
    useEffect
} from 'react';

function UseEffectDemo() {
    console.log('create UseEffectDemo Funciton');
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({a:1, b:2})

    useEffect(() => {
        console.log('component did mount & component did update');
        // 异步操作
        const timer = setTimeout(() => {
            setCount(100);
        }, 2000);
        return () => {
            console.log('component will unmount');
            clearTimeout(timer);
        };
    });
    
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

export default UseEffectDemo;
