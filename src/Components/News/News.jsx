import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import NewCard from '../NewCard/NewCard'
import './News.css'

const News = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		const options = {
			headers: {
				'X-RapidAPI-Key':
					'1c73a0124fmshe90ddb2f267c486p176cb4jsn7703478cd314',
				'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
			},
		}

		const fetchNews = async () => {
			await axios
				.get(
					'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
					options
				)
				.then((data) => setNews(data.data.data))
				.then((err) => console.log(err))
		}

		fetchNews()
	}, [])

	console.log(news)

	if (!news.length > 0) return <Loading />

	return (
		<div className='news'>
			{news?.map((item, idx) => (
				<NewCard key={idx} item={item} />
			))}
		</div>
	)
}

export default News
