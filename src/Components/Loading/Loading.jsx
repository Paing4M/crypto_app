import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.css'

const Loading = () => {
	return (
		<div className='loading'>
			<ReactLoading
				type={'spinningBubbles'}
				color={'#448bce'}
				height={80}
				width={80}
			/>
		</div>
	)
}

export default Loading
