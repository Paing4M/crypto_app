import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../fetchApi'
import Card from '../Card/Card'
import './Home.css'
import millify from 'millify'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

const Home = () => {
	const [globalStats, setGlobalStats] = useState([])

	const [coins, setCoins] = useState([])

	useEffect(() => {
		fetchApi('stats?referenceCurrencyUuid=yhjMzLPhuIDl').then((data) =>
			setGlobalStats(data.data)
		)

		fetchApi('coins').then((data) => setCoins(data.data.coins.slice(0, 10)))
	}, [])

	if (!coins.length > 0) return <Loading />

	return (
		<div className='home'>
			<h1 className='home_title'>Global Stats</h1>

			<div className='home_box'>
				<div className='homeBox_left'>
					<div>
						<p>Total Cryptocurrencies</p>
						<strong>{millify(globalStats.totalCoins)}</strong>
					</div>

					<div>
						<p>Total Market Cap</p>
						<strong>{millify(globalStats.totalMarketCap)}</strong>
					</div>

					<div>
						<p>Total Markets</p>
						<strong>{millify(globalStats.totalMarkets)}</strong>
					</div>
				</div>

				<div className='homeBox_right'>
					<div>
						<p>Total Exchanges</p>
						<strong>{millify(globalStats.totalExchanges)}</strong>
					</div>

					<div>
						<p>Total 24h Volume</p>
						<strong>{millify(globalStats.total24hVolume)}</strong>
					</div>
				</div>
			</div>

			<div className='home_cardTitle'>
				<h1>Top 10 Cryptocurrencies</h1>
				<Link to={'/cryptocurrencies'}>See More</Link>
			</div>
			<div className='home_cards'>
				{coins?.map((coin, idx) => (
					<Card key={idx} coin={coin} />
				))}
			</div>
		</div>
	)
}

export default Home
