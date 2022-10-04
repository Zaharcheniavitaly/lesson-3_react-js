import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

export default function Profile() {
  return (
	<div className={s.content}>
			<ProfileInfo />			
			<MyPosts />
	</div>
  )
}
