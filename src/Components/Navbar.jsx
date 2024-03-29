import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/mall_project/login');
	};

	const goToMain = () => {
		navigate('/mall_project');
	}

	return (
		<div>
			<div>
				<div className='login_button' onClick={goToLogin}>
					<FontAwesomeIcon icon={faUser} />
					<div>LOGIN</div>
				</div>
			</div>
			<div className='nav_section' onClick={goToMain}>
				<img
					width={100}
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png'
					alt='로고'
				/>
			</div>
			<div className='menu_area'>
				<ul className='menu_list'>
					{menuList.map((menu, index) => (
						<li key={menu}>{menu}</li>
					))}
				</ul>
				<div className='search_box'>
					<input type='text' placeholder='제품명 검색' />
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
