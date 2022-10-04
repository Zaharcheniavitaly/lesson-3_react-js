import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

export default function MyPosts() {

	

	let postsData = [
		{
		id: 1,
		message: 'Hi, how are you?', 
		likeCount: '12',
	},	{
		id: 2,
		message: "it's my first post", 
		likeCount: '11'
	},	{
		id: 3,
		message: "fgddfgn dhd", 
		likeCount: '1'
	}
	]

	let postsElements = postsData.map((p, i) => {
	return (
		<Post 
		key={i}
		message={p.message} 
		likeCount={p.likeCount} />
	)
	});


  return (
	<div>
			<h3>My post</h3>
			<div>
					<div>
						<textarea></textarea>
					</div>
					<button>Add post</button>
			</div>				 
	
			<div className={s.itemMess}>
				{postsElements}
			</div>					
	</div>

  )
}
