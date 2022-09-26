import React, {useState, useEffect}  from "react";
import Header from "./Components/Header";
import PropTypes  from 'prop-types';
import Form from "./Components/Form";
import Message from "./Components/Message";



function App() {

	const [messageList, setMessageList] = useState([{
		id: 1,
		author: 'Vitaly',
		text: 'Привет, Verber, очень сложно идет изучение React!!!'
	}, {
		id: 2,
		author: '',
		text: ''
	}]);
	

	const [messageBody, setMessageBody] = useState({
		text: '',
		author: ''
	})

	
	
		

	const ROBOT_MESSAGE = 'Привет Vitaly, деваться некуда, надо учить'

useEffect(()=>{
	if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot Verber'){
setTimeout(()=>{
	setMessageList(pervstate =>[...pervstate, {text:ROBOT_MESSAGE, author: 'robot Verber'}])
}, 1500)
	}
}, [messageList])


	return (
	<div className="app">

			<Header/>
	
		<div className="form-wrap">
	

		<h1 className="title">Сообщения</h1>

		<Form data={messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>

   <div className="messageList">
      {
		messageList.map((mess) => <Message  
		key={mess.id} 
		id={mess.id} 
		author={mess.author} 
		text={mess.text} />		  
	)}
			</div>

		</div>
		
	</div>	 
	);
	
}

App.propTypes = {
	messageList: PropTypes.arrayOf(PropTypes.object)
}

export default App;  



