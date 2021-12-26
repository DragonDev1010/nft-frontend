import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './App';
const initialState = {
  search: {
    status: [],
    price: [],
    category: []
  }
};
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "changeState": {
      return {
        search: {
          category: action.search.category,
          price: action.search.price,
          status: action.search.status,
        }
      };
    }
    default:
      return {
        search: {
          status: [],
          price: [],
          category: [],
        }
      };
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
