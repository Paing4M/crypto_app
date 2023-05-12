import React, { useEffect, useState } from 'react'
import './CoinDetails.css'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../../fetchApi'
import {
	PaidOutlined,
	BoltOutlined,
	EmojiEventsOutlined,
	InfoOutlined,
	InsertChartOutlined,
	LocalAtmOutlined,
	TagOutlined,
	CheckOutlined,
	CloseOutlined,
} from '@mui/icons-material'
import { CoinDetailStat } from '../CoinDetailStat/CoinDetailStat'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'
import { Avatar } from '@mui/material'
import Loading from '../Loading/Loading'

const CoinDetails = () => {
	const { id } = useParams()
	const [coin, setCoin] = useState(null)

	useEffect(() => {
		fetchApi(`coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`)
			.then((data) => setCoin(data.data.coin))
			.catch((err) => console.log(err))
	}, [])

	console.log('s>>>', coin)

	const stats = [
		{
			title: 'Price to USD',
			value: `$ ${coin?.btcPrice && millify(coin?.btcPrice)}`,
			icon: <PaidOutlined />,
		},
		{ title: 'Rank', value: `${coin?.rank}`, icon: <TagOutlined /> },
		{
			title: '24h Volume',
			value: `$ ${coin?.['24hVolume'] && millify(coin?.['24hVolume'])}`,
			icon: <BoltOutlined />,
		},
		{
			title: 'Market Cap',
			value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
			icon: <PaidOutlined />,
		},
		{
			title: 'All-time-high(daily avg)',
			value: `$ ${
				coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)
			}`,
			icon: <EmojiEventsOutlined />,
		},
	]

	const genericStats = [
		{
			title: 'Number Of Markets',
			value: coin?.numberOfMarkets,
			icon: <InsertChartOutlined />,
		},
		{
			title: 'Number Of Exchanges',
			value: coin?.numberOfExchanges,
			icon: <LocalAtmOutlined />,
		},
		{
			title: 'Aprroved Supply',
			value: coin?.supply?.confirmed ? <CheckOutlined /> : <CloseOutlined />,
			icon: <InfoOutlined />,
		},
		{
			title: 'Total Supply',
			value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
			icon: <InfoOutlined />,
		},
		{
			title: 'Circulating Supply',
			value: `$ ${
				coin?.supply?.circulating && millify(coin?.supply?.circulating)
			}`,
			icon: <InfoOutlined />,
		},
	]

	if (!coin) return <Loading />

	return (
		<div className='coinDetails'>
			<div className='coinDetails_head'>
				<Avatar src={coin?.iconUrl} />
				<h2>
					{coin?.name} ({coin?.name}-{coin?.symbol}) Price
				</h2>
			</div>

			<div className='coinDetails_container'>
				<div className='coinDetails_statics'>
					<div className='coinDetails_stats'>
						<div className='coinDetails_statLeft'>
							<h4 className='statTitle'>{coin.name} Value Statistics</h4>
							<p className='statSubTitle'>
								An overview showing the stats of {coin.name}
							</p>
							{stats?.map((stat, idx) => (
								<CoinDetailStat key={idx} stat={stat} />
							))}
						</div>

						<div className='coinDetails_statRight'>
							<h4 className='statTitle'>Other Stats Info</h4>
							<p className='statSubTitle'>
								An overview showing the statistics of {coin?.name}, such
								as the base and quote currency, the rank, and trading
								volume.
							</p>
							{genericStats?.map((stat, idx) => (
								<CoinDetailStat key={idx} stat={stat} />
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='coinDetails_about'>
				<div className='coinDetails_text'>
					<h3>What is {coin?.name}</h3>
					{HTMLReactParser(coin?.description)}
				</div>

				<div className='coinDetails_links'>
					<h2>{coin?.name} Links</h2>
					{coin?.links.map((link, idx) => (
						<div key={idx} className='links'>
							<h4>{link?.type}</h4>
							<a href={link?.url} target='_blank' rel='noreferrer'>
								{link?.name}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CoinDetails
