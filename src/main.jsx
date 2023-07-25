import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import { logger } from './Middleware/index.js'
import rootReducer from './reducers/rootReducer.js'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk,logger));

const store = createStore(rootReducer ,composeEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
