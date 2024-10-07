import React from 'react'
//import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

const Header = () => {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header_icon'/>	
			</IconButton>
		</div>
	) //return
} //Header

export default Header;
