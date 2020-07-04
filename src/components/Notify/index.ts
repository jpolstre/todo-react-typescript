import React from 'react'
import ReactDOM from 'react-dom'

import { Notify } from '../../store/ducks/tasks/types'
import Notifyelem from './Notifyelem'

class NotifyCmp {
	private notify: Notify
	// private wrapperRef = React.createRef<HTMLDivElement>();
	private id: string = new Date().getTime() + ''

	constructor(notify: Notify) {
		this.notify = notify
		this.createNotify()
	}

	createNotify() {

		let notificationsWrapper = document.getElementById('wrapper-notifications')

		if (!notificationsWrapper) {
			notificationsWrapper = document.createElement('div')
			notificationsWrapper.id = 'wrapper-notifications'
			notificationsWrapper.classList.add('wrapper-notifications')
			document.body.appendChild(notificationsWrapper)
		}

		const wrapper = document.createElement('div')
		wrapper.id = this.id
		notificationsWrapper.prepend(wrapper)
		

		// const notifyElem = <Notifyelem notify={this.notify} removeNotify={this.removeNotify}/>
		//reference:this.wrapperRef
		const notifyElem = React.createElement(Notifyelem, { notify: this.notify, removeNotify: this.removeNotify, id: this.id })
		ReactDOM.render(notifyElem, wrapper)

		const lifeTime = this.notify.lifeTime || 7000
		setTimeout(() => {
		
			// this.removeNotify(this.wrapperRef.current)
			this.removeNotify(this.id)
		}, lifeTime)
	}
// elem: HTMLDivElement | null
	removeNotify(id: string) {
		const wrapper =  document.getElementById(id)
		if (wrapper) {
			const child = wrapper.querySelector('div')
			child?.classList.remove('show')
			child?.classList.add('hide')
			setTimeout(() => {
				ReactDOM.unmountComponentAtNode(wrapper)
				wrapper.remove()
			}, 300)

			
			// elem?.remove()
		}
		
	}
}

export default NotifyCmp
