import React from 'react'
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
	
	<input className='input-name' placeholder="Имя" value={author} onChange = {(e)=>
		setData(pervstate => ({...pervstate, author: e.target.value}))} />
		<br/>

		<input className='input-name' placeholder="Текст" value={text} onChange = {(e)=>
			setData(pervstate => ({...pervstate, text: e.target.value}))} />
			<br/>
		
		<button className='btn' type="submit">Отправить</button>
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

