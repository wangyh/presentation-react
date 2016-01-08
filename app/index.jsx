import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {init, next, prev} from './action_creators';
import reducer from './reducer';
import {App} from './components/app';

const store = createStore(reducer);
window.addEventListener('keyup', action);
function action(event){
    event.preventDefault();
    //enter, space and right arrow
    if(event.keyCode == 13 || event.keyCode == 32 || event.keyCode == 39){
        store.dispatch(next());
    } 
    //left arrow
    if(event.keyCode == 37){
        store.dispatch(prev());
    }
}
store.dispatch(init({index: 0, total: 1}));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body
);
