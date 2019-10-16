import React, { useEffect, useLayoutEffect, useRef, useDebugValue } from "react";

const OtherHooksDemo = () => {
    const square = useRef(null);

    const result = useDebug('test');
    console.log(result);
    useEffect(() => {
        // 异步执行，不阻塞 paint
        square.current.style.marginLeft = '0px';
    }, []);

    useLayoutEffect(() => {
        // 同步执行，阻塞 paint
        square.current.style.marginLeft = '100px'
    }, []);

    return (
        <div className="square" ref={square}>square</div>
    );
};

function useDebug(value) {
    // 自定义 hooks 的debug
    useDebugValue(value);
    return value + value;
}

export default OtherHooksDemo;