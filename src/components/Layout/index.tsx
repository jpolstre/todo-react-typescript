import React from 'react'
import Grid from './styles'
import Header from '../Header'
import ListTasks from '../ListTasks'
import Footer from '../Footer'


const Layout: React.FC = () => {
	// useEffect(() => {
	// 	new Dialog({ title: 'Test', content: 'Test content 2344', onOk: () => {
	// 		console.log('ok');
	// 	}, onCancel: () => {
	// 		console.log('cancel');
	// 	} })
	// }, [])

	return (
		<Grid>
			<Header title='TaskApp' />
			<ListTasks />
			<Footer />
		</Grid>
	)
}

export default Layout
