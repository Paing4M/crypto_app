import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Exchanges from './Components/Exchanges/Exchanges'
import Cryptocurrencies from './Components/Cryptocurrencies/Cryptocurrencies'
import CoinDetails from './Components/CoinDetails/CoinDetails'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/cryptocurrencies' element={<Cryptocurrencies />} />

					<Route path='/exchanges' element={<Exchanges />} />

					<Route path='/details/:id' element={<CoinDetails />} />

					<Route path='/news' element={<News />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
