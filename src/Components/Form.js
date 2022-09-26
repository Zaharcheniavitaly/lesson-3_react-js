import React,{useRef, useEffect} from 'react'
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

	 const inputRef = useRef(null); 

	 useEffect(() => {
		inputRef.current?.focus();
		//console.log(inputRef.current);
		//inputRef.current.style.border = '3px solid red';	
	 }, [author])

  return (
	<form onSubmit={submitForm}>

	<TextField style={{marginBottom: '5px'}}
	inputRef={inputRef}
	id="outlined-basic" fullWidth label="Имя" variant="outlined" value={author} 
	onChange = {(e)=>
		setData(pervstate => ({...pervstate, author: e.target.value}))}/>
		<br/>

		<TextField
		//inputRef={inputRef}
		style={{marginBottom: '5px'}}
		 id="outlined-basic" fullWidth label="Текст" variant="outlined" value={text} onChange = {(e)=>
			setData(pervstate => ({...pervstate, text: e.target.value}))}/>
			<br/>
		
		<Button variant="contained" fullWidth type="submit" >Отправить</Button>

</form>
  )
}




