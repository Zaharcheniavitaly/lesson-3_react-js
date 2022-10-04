import React from 'react';
import s from './HomePage.module.css'

export default function HomePage(props) {
  return (
	<div className={s.homePage}>
			<h1>Добро пожаловать, {props.userName}</h1> 
	</div>
  )
}
