import React, {
    useState,
    useEffect,
    memo,
    useMemo,
    useCallback
} from 'react';

// 减少组件本身的重渲染
const MemoChild = memo(Child);

function UseCallbackDemo() {
    console.log('create UseCallbackDemo Funciton');
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({a:1, b:2})

    useEffect(() => {
        console.log('component did mount & component did update');
        return () => {
            console.log('component will unmount');
        };
    }, []);
    
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
            <MemoChild 
                // 减少值的传递触发的重渲染
                childObj={useMemo(() => ({number: obj.a}), [obj.a])}
                // 减少函数的传递触发的重渲染
                onClick={useCallback(changeObj, [obj])}
            />
        </>
    );
}

function Child({childObj, onClick}) {
    console.log('create Child function ');
    return (<>
        <button onClick={() => onClick()}>修改obj</button>
        我是子组件{childObj.number}
    </>)
}

export default UseCallbackDemo;
