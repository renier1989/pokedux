import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { pokemonsReducer } from './actions/reducers/pokemons.js'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import { logger } from './Middleware/index.js'

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger )
);

const store = createStore(pokemonsReducer ,composeEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
