import { Avatar } from '@mui/material'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../fetchApi'
import Loading from '../Loading/Loading'
import './Exchanges.css'

const Exchanges = () => {
	const [exchanges, setExchanges] = useState([])

	useEffect(() => {
		fetchApi(
			'exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc'
		).then((data) => setExchanges(data.data.coins))
	}, [])

	console.log('ex>>', exchanges)

	if (!exchanges.length > 0) return <Loading />

	return (
		<div className='exchanges'>
			<div className='exchanges_header'>
				<h4 className='row_head'>Exchanges</h4>
				<h4 className='row'>24h Trade Volume</h4>
				<h4 className='row'>Markets</h4>
				<h4 className='row'>Price</h4>
			</div>

			<div className='exchanges_lists'>
				{exchanges?.map((coin) => (
					<div key={coin?.name} className='exchanges_list'>
						<div className='row_head'>
							<strong>{coin?.rank}. </strong>
							<Avatar src={coin?.iconUrl} />
							<p className='row_headName'>{coin?.name}</p>
						</div>
						<div className='row'>
							<p>$ {millify(coin?.['24hVolume'])}</p>
						</div>
						<div className='row'>
							<p>{coin?.numberOfMarkets}</p>
						</div>
						<div className='row'>
							<p>$ {millify(coin?.price)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Exchanges
