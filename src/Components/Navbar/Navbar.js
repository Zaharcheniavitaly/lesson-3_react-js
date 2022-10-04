import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import s from './Navbar.module.css'

export default function Navbar() {
  return (
	<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to={'/'} activeClassName={s.active}>Home</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/messages'} activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<Link>News</Link>
			</div>
			<div className={s.item}>
				<Link>Music</Link>
			</div>
			<div className={s.item}>
				<Link>Settings</Link>
		</div>
</nav>
  )
}
