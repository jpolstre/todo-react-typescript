import { createStore, Store } from 'redux'

import rootReducer, { AppState } from './ducks/rootReducer'

const store: Store<AppState> = createStore(rootReducer)

export default store