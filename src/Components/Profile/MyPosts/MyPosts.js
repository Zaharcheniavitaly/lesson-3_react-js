import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

export default function MyPosts() {
  return (
	<div>
			<p>My post</p>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>				 
	
			<div className={s.itemMess}>
				<Post message="Hi, how are you" />
				<Post message="it's my first post" />				
			</div>					
	</div>

  )
}
