# react-hooks-demo
简单了解下react，redux，react-router的 [hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html) 各自的含义以及使用方法。

### hooks 使用规则
- 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
- 只在 React 函数中调用 Hook
- 只能在自定义 Hook 中调用其他 Hook

### hooks demo
- [useState](./src/components/useStateDemo.jsx)
- [useEffect](./src/components/useEffectDemo.jsx)
- [useContext](./src/components/useContextDemo.jsx)
- [useMemo和memo](./src/components/memoAnduseMemoDemo.jsx)
- [useCallback](./src/components/useCallbackDemo.jsx)
- [useRef和useImperativeHandle](./src/components/refDemo.jsx)
- [useReducer](./src/components/useReducerDemo.jsx)
- [reduxHooks](./src/components/reduxHooksDemo.jsx)
- [useLayoutEffect和useDebugValue](./src/components/otheHooksDemo.jsx)
- [useLocation](./src/App.js)

### hooks 的使用总结
1.  不能嵌套，不能条件判断，只能在函数组件使用，平铺的写法，因为 hooks 的原理就是按照顺序入栈，不能打乱顺序。
2. useEffect 是 didMount 和 didUpdate 的合集，使用第二个依赖参数的时候就是 shouldUpdate 的判断，是用的 Object.is 进行浅比较，所以依赖尽量使用单层依赖
3. useEffect 和 useLayoutEffect 的区别：操作dom的话，一般都用 useLayoutEffect, 其它情况都是用 useEffect , useLayoutEffect 顾名思义，就是浏览器的渲染流程 layout 之后触发，并且同步执行，执行完毕之后才是 paint，useEffect 是一样的，唯一不同的就是它是异步的，不会阻塞 paint，直观的区别请看示例。
4. hooks 会经常的触发重渲染，为了解决性能问题有了一下 hooks：
5. useCallback 解决每次函数的重新创建，同时避免了函数作为 props 传递时触发自组件的重渲染。
6. memo 解决了函数组件每次更新的重渲染，不使用的时候，在 props 不改变的情况下也会重渲染。
7. useMemo 解决了 object 作为 props 传递的是，属性未改变但依然触发的重渲染。
8. useRef 和 createRef 的区别，就是前者是不会每次重渲染都会创建，后者会每次新建，减少了创建的开销。
9. useImperativeHandle 为使用 ref 传递的时候自定义传递的属性，减少了默认传递全部属性的开销。
10. useDebugValue 只能在自定义 hooks 里使用。
11. useContext 就是上下文的 hook 形式，没什么特别的。
12. redux 和 router 的 hooks  没发现特别的地方。

### 参考文档
- [react-hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
- [react-redux-hooks](https://react-redux.js.org/api/hooks)
- [react-router-hooks](https://reacttraining.com/react-router/web/api/Hooks)
- [useEffect与useLayoutEffect](https://www.jianshu.com/p/412c874c5add)

