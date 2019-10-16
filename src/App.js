import React, {
    useState,
    useEffect
} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import UseStateDemo from './components/useStateDemo';
import UseEffectDemo from './components/useEffectDemo';
import UseCallbackDemo from './components/useCallbackDemo';
import MemoAndUseMemoDemo from './components/memoAnduseMemoDemo';
import UseContextDemo from './components/useContextDemo';
import UseReducerDemo from './components/useReducerDemo';
import ReduxHooksDemo from './components/reduxHooksDemo';
import RefHooksDemo from './components/refDemo';
import OtherHooksDemo from './components/otheHooksDemo';

function App() {

    const [activeRoute, setActiveRoute]  = useState('/');
    useEffect(() => {
        console.log('create matchRoute function');
        const pathname = window.location.pathname;
        setActiveRoute(pathname);
    }, [window.location.pathname]);

    return (
        <Router>
            <div className="App">
                <div className="App-routers">
                    <Link to="/" className={activeRoute === '/' ? 'active' : ''} onClick={() => setActiveRoute('/')}>home</Link>
                    <Link to="/useState" className={activeRoute === '/useState' ? 'active' : ''} onClick={() => setActiveRoute('/useState')}>useStateDemo</Link>
                    <Link to="/useEffect" className={activeRoute === '/useEffect' ? 'active' : ''} onClick={() => setActiveRoute('/useEffect')}>useEffectDemo</Link>
                    <Link to="/memoAndUseMemo" className={activeRoute === '/memoAndUseMemo' ? 'active' : ''} onClick={() => setActiveRoute('/memoAndUseMemo')}>MemoAndUseMemoDemo</Link>
                    <Link to="/useCallback" className={activeRoute === '/useCallback' ? 'active' : ''} onClick={() => setActiveRoute('/useCallback')}>useCallbackDemo</Link>
                    <Link to="/useContextDemo" className={activeRoute === '/useContextDemo' ? 'active' : ''} onClick={() => setActiveRoute('/useContextDemo')}>useContextDemo</Link>
                    <Link to="/useReducerDemo" className={activeRoute === '/useReducerDemo' ? 'active' : ''} onClick={() => setActiveRoute('/useReducerDemo')}>useReducerDemo</Link>
                    <Link to="/reduxHooksDemo" className={activeRoute === '/reduxHooksDemo' ? 'active' : ''} onClick={() => setActiveRoute('/reduxHooksDemo')}>reduxHooksDemo</Link>
                    <Link to="/refHooksDemo" className={activeRoute === '/refHooksDemo' ? 'active' : ''} onClick={() => setActiveRoute('/refHooksDemo')}>refHooksDemo</Link>
                    <Link to="/otherHooksDemo" className={activeRoute === '/otherHooksDemo' ? 'active' : ''} onClick={() => setActiveRoute('/otherHooksDemo')}>otherHooksDemo</Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/useState" component={UseStateDemo}></Route>
                    <Route exact path="/useEffect" component={UseEffectDemo}></Route>
                    <Route exact path="/useCallback" component={UseCallbackDemo}></Route>
                    <Route exact path="/memoAndUseMemo" component={MemoAndUseMemoDemo}></Route>
                    <Route exact path="/useContextDemo" component={UseContextDemo}></Route>
                    <Route exact path="/useReducerDemo" component={UseReducerDemo}></Route>
                    <Route exact path="/reduxHooksDemo" component={ReduxHooksDemo}></Route>
                    <Route exact path="/refHooksDemo" component={RefHooksDemo}></Route>
                    <Route exact path="/otherHooksDemo" component={OtherHooksDemo}></Route>
                    <Route path="*" component={NoMatch}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

function Main() {
    return (
        <header className="App-header">
            <p>
                React Hooks Demo.
            </p>
        </header>
    );
}
