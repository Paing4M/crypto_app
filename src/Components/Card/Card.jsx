import { Avatar } from '@mui/material'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ coin }) => {
	return (
		<Link to={`/details/${coin.uuid}`} className='card'>
			<div className='card_header'>
				<h4
					style={{
						fontSize: '18px',
						flex: '1',
						fontWeight: '800',
						color: `${coin.color}`,
					}}
				>
					<span style={{ color: '#fff' }}>{coin.rank}.</span> {coin.name}
				</h4>
				<Avatar src={coin.iconUrl} />
			</div>

			<div className='card_info'>
				<p>Price: {millify(coin.price)}</p>
				<p>Market Cap: {millify(coin.marketCap)}</p>
				<p>Daily Change: {coin.change}%</p>
			</div>
		</Link>
	)
}

export default Card
