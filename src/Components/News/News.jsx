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
				'X-BingApis-SDK': 'true',
				'X-RapidAPI-Key':
					'66b0bae770msh7ca6db2c6eb3347p112087jsn44604e8500db',
				'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
			},
		}

		const fetchNews = async () => {
			await axios
				.get(
					'https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off',
					options
				)
				.then((data) => setNews(data.data.value))
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
