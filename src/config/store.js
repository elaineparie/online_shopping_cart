import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({

})

const store = createStore(
  rootReducer
  window.__REDIX_DEVTOOLS_EXTENSION__ && window.__REDIX_DEVTOOLS_EXTENSION__()
)

export default store 
