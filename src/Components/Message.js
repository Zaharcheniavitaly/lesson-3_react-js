import React  from 'react'
import PropTypes  from 'prop-types';
import './Message.css';




function Message({author, text}) {	
		return(
			<div className='message-class'>
			<h1 className='text-class-name'>{author}</h1>
			<p className='text-class'>{text}</p>
			</div>
		)
	}

	Message.propTypes = {
author: PropTypes.string,
text: PropTypes.string
	}

// Message.propTypes = {
// 	someProp: PropTypes.bool.isRequired
// 		}

export default  Message

