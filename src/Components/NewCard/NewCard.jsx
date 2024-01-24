import React from 'react'
import { Avatar } from '@mui/material'
import './NewCard.css'
import moment from 'moment'

const NewCard = ({ item }) => {
	return (
		<div className='newCard'>
			<div className='newCard_head'>
				<h2>{item?.title}</h2>
				<img src={item?.thumbnail} alt='' />
			</div>
			<a href={item?.url} target='_blank'>
				{item?.description.slice(0, 300)} <span>read more...</span>
			</a>
			<div className='newCard_foot'>
				{/* 
				<div className='left'>
					{item?.provider[0].image?.thumbnail?.contentUrl && (
						<Avatar
							src={item?.provider[0].image?.thumbnail?.contentUrl}
						/>
					)}
					<span>{item.provider[0].name}</span>
				</div> */}
				<div className='right'>
					<span>{moment(item.createdAt).startOf('ss').fromNow()}</span>
				</div>
			</div>
		</div>
	)
}

export default NewCard
