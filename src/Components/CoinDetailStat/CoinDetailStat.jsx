import React from 'react'
import './CoinDetailStat.css'

export const CoinDetailStat = ({ stat }) => {
	return (
		<div className='coinDetails_stat'>
			<div className='left'>
				{stat.icon}
				<span>{stat.title}</span>
			</div>
			<div>
				<strong>{stat.value}</strong>
			</div>
		</div>
	)
}
