import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
	//console.log(props.message);
  return (
	<div className={s.item}>
			<div>
				<img src='https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg' />
				<br/>
				{props.message}
			</div>	
			<div>
				<span>like</span> {props.likeCount}
			</div>
	</div>
  )
}


