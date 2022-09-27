import React from 'react'

export default function Liuser(props) {
	//const user = props.user
  return (
	<li style={{marginBottom: '10px'}}>
	{props.id}{props.author}
	</li>
  )
}
