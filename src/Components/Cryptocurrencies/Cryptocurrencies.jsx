import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../fetchApi'
import './Cryptocurrencies.css'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'

const Cryptocurrencies = () => {
	const [coins, setCoins] = useState([])

	useEffect(() => {
		fetchApi('coins').then((data) => setCoins(data.data.coins))
	}, [])

	if (!coins.length > 0) return <Loading />

	return (
		<div className='cryptocurrencies'>
			<div className='cryptocurrencies_list'>
				{coins?.map((coin, idx) => (
					<Card key={idx} coin={coin} />
				))}
			</div>
		</div>
	)
}

export default Cryptocurrencies
