import React from 'react'

import { Provider } from 'react-redux'

import store from './store'

import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Layout />
			<GlobalStyles />
		</Provider>
	)
}

export default App
