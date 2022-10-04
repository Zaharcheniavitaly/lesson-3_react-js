import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';


export default function DialogItem(props) {

	let pathDialog = "/dialogs/" + props.id;
	
	return (
		<div className={s.dialog + ' ' + s.active}>
					<NavLink to={pathDialog}>{props.name}</NavLink>
				</div>
	)
}

