import React from 'react'
import Grid from './styles'
import Header from '../Header'
import ListTasks from '../ListTasks'
import Footer from '../Footer'

const Layout: React.FC = () => {
	return (
		<Grid>
			<Header title='TaskApp' />
			<ListTasks />
			<Footer />
		</Grid>
	)
}

export default Layout
