import React, {
    useState,
    useCallback,
    memo,
    useRef,
    useImperativeHandle,
    forwardRef
} from 'react';

const MemoChild = memo(forwardRef(Child));

function UseRefDemo() {
    console.log('create UseRefDemo Funciton');
    const [count, setCount] = useState(0);
    const inputRef = useRef('input');
    const change = useCallback((count) => {
        console.log(inputRef.current);
        setCount(count);
        console.log(inputRef.current);
    }, [count]);
    return (
        <div className="use-state-wrapper">
            <button onClick={() => setCount(prevCount => --prevCount)}>-</button>
            <MemoChild ref={inputRef} change={change} count={count}></MemoChild>
            <button onClick={() => setCount(prevCount => ++prevCount)}>+</button>
        </div>
    );
}

function Child({count, change}, ref) {
    const childRef = useRef();
    useImperativeHandle(ref, () => ({
        value: childRef.current.value,
        type: childRef.current.type
    }));
    return (
        <>
            <input className="count" ref={childRef} onChange={e => change(e.target.value)} value={count}/>
        </>
    );
}

export default UseRefDemo;
