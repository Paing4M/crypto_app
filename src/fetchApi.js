import axios from 'axios'

const baseURL = 'https://coinranking1.p.rapidapi.com'

const options = {
	headers: {
		'X-RapidAPI-Key': '66b0bae770msh7ca6db2c6eb3347p112087jsn44604e8500db',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	},
}

export const fetchApi = async (url) => {
	const { data } = await axios.get(`${baseURL}/${url}`, options)
	return data
}
