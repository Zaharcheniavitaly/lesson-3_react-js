import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

export default function Profile() {
  return (
	<div className={s.content}>
			<div>
				<h1>Main content</h1>
				<img src="https://trofei.by/img/article/SfQ6pSjOh12M3a01.jpg?h=555&w=894&fit=crop&s=5201375400d790b81f27648d11982cf7" alt="Minsk" /> 
			</div>
		<div className={s.itemMess}>
			avat + descr					 
		</div>
		<MyPosts />
	</div>
  )
}
