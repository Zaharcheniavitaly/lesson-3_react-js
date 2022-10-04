import React, {useState} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { NavLink, Link, useParams } from 'react-router-dom';
import s from './Dialogs.module.css';


 function Dialogs() {

	let dialogsData = [
		{
		id: 1,
		name: 'Виталий'
	},	{
		id: 2,
		name: 'Андрей'
	},	{
		id: 3,
		name: 'Марина'
	},	{
		id: 4,
		name: 'Вика'
	}
]

let dialogsElements = dialogsData.map((d,i) => {
	return (
		<DialogItem 
		key={i}
		name={d.name} 
		id={i}/>
	)
});


let messageData = [
	{
	id: 1,
	message: 'Привет',
	date: new Date().toLocaleTimeString()
},	{
	id: 2,
	message: 'Тебе тоже привет',
	date: new Date().toLocaleTimeString()
},	{
	id: 3,
	message: 'Как твои дела?',
	date: new Date().toLocaleTimeString()
},	{
	id: 4,
	message: 'Все хорошо!!!!!',
	date: new Date().toLocaleTimeString()
}
]

const [message, setMessage] = useState([]);
const {messageId} = useParams()


let messagesElements = messageData.map((m, i)=> {
return (
	<Message 
	key={i}
	message={m.message} 
	date={m.date} />
)
});





  return (
	 <div className={s.dialogs}>		
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={s.messages}>
				{messagesElements}
			</div>
	 </div>	
  )
}
export default Dialogs;





