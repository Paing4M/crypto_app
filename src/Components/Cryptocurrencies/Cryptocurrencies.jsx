import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../fetchApi'
import './Cryptocurrencies.css'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'

const Cryptocurrencies = () => {
	const [coins, setCoins] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		fetchApi('coins').then((data) => setCoins(data.data.coins))
	}, [])

	// console.log(coins)

	if (!coins.length > 0) return <Loading />

	return (
		<div className='cryptocurrencies'>
			<div className='search'>
				<input
					onChange={(e) => setSearchTerm(e.target.value)}
					type='text'
					placeholder='Search ...'
				/>
			</div>
			<div className='cryptocurrencies_list'>
				{coins
					?.filter((coin) =>
						coin?.name.toLowerCase().includes(searchTerm.toLowerCase())
					)
					.map((coin, idx) => (
						<Card key={idx} coin={coin} />
					))}
			</div>
		</div>
	)
}

export default Cryptocurrencies
