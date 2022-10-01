import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
	console.log(props.message);
  return (
	<div className={s.item}>
		<img src='https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg' />
		{props.message}
		<div>
			<span>like</span>
		</div>
	</div>
  )
}


