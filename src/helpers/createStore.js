import {applyMiddleWare, createStore} from "redux";
import thunk from 'react-thunk';

export default  () => {
    return createStore(reducers, {}, applyMiddleWare(thunk));
}