import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(false)
	}

	return (
		<div className='navbar'>
			<Link to={'/'} className='navbar_left'>
				<h2>Crypto</h2>
			</Link>
			<div className={active ? 'active navbar_right' : 'navbar_right'}>
				<div className='navbar_options'>
					<NavLink
						onClick={handleClick}
						className='navbar_option'
						end
						to={'/'}
					>
						<HomeIcon /> Home
					</NavLink>

					<NavLink
						onClick={handleClick}
						className='navbar_option'
						end
						to={'/cryptocurrencies'}
					>
						<AttachMoneyIcon /> Cryptocurrencies
					</NavLink>

					{/*
	<NavLink
						onClick={handleClick}
						className='navbar_option'
						end
						to={'/exchanges'}
					>
						<CurrencyExchangeIcon />
						Exchanges
					</NavLink>
*/}

					<NavLink
						onClick={handleClick}
						className='navbar_option'
						end
						to={'news'}
					>
						<LightbulbIcon />
						News
					</NavLink>

					<CloseIcon className='close' onClick={() => setActive(false)} />
				</div>
			</div>

			<MenuIcon className='menu' onClick={() => setActive(true)} />
		</div>
	)
}

export default Navbar
