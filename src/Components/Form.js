import React from 'react'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';


import './Form.css'

export default function Form({data, setData, setMessage}) {

	const {text, author} = data

	const submitForm = (e) =>{
		e.preventDefault()
		if(text.length > 0){
	setMessage(pervstate => [...pervstate, {text, author}])
		}
		setData(
			{
				text:'',
				author: ''
			}
		)
	}

  return (
	<form onSubmit={submitForm}>


	<TextField id="outlined-basic" label="Имя" variant="outlined" value={author} onChange = {(e)=>
		setData(pervstate => ({...pervstate, author: e.target.value}))}/>
		<br/>

		<TextField id="outlined-basic" label="Текст" variant="outlined" value={text} onChange = {(e)=>
			setData(pervstate => ({...pervstate, text: e.target.value}))}/>
			<br/>
		
		<Button variant="contained" type="submit">Contained</Button>

</form>
  )
}




// const Form = ({data, setData, setMessage}) =>{
// 	const {text, author} = data


// const submitForm = (e) =>{
// 	e.preventDefault()
// 	if(text.length > 0){
// setMessage(pervstate => [...pervstate, {text, author}])
// 	}
// 	setData(
// 		{
// 			text:'',
// 			author: ''
// 		}
// 	)
// }

// return(
// 	<form onSubmit={submitForm}>
	
// 	<input placeholder="Имя" value={author} onChange = {(e)=>
// 		setData(pervstate => ({...pervstate, author: e.target.value}))} />

// 		<input placeholder="Текст" value={text} onChange = {(e)=>
// 			setData(pervstate => ({...pervstate, text: e.target.value}))} />
		
// 		<button type="submit">Отправить</button>
// </form>
// )
// }

