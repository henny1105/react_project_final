import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const menuList = ['WOMAN', 'MAN', 'KIDS', 'HOME', '향수'];

	const navigate = useNavigate();

	const goToLogin = () => {
		navigate('/mall_project/login');
	};

	const goToMain = () => {
		navigate('/mall_project');
	};

	const search = (event) => {
		if (event.key === 'Enter') {
			let keyword = event.target.value;
			navigate(`/mall_project?q=${keyword}`);
		}
	};

	const handleSearchClick = () => {
		const searchInput = document.querySelector('.search_box input');
		const keyword = searchInput.value;
		if (keyword) {
			navigate(`/mall_project?q=${keyword}`);
		}
	};

	return (
		<div className='top_cont'>
			<div className='inner'>
				<div className='login_button_box' onClick={goToLogin}>
					<div className='login_button'>
						<FontAwesomeIcon icon={faUser} />
						<div>LOGIN</div>
					</div>
				</div>
				<div className='nav_section' onClick={goToMain}>
					<img width={200} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png' alt='로고' />
				</div>
				<div className='menu_area'>
					<ul className='menu_list'>
						{menuList.map((menu, index) => (
							<li key={menu}>{menu}</li>
						))}
					</ul>
					<div className='search_box'>
						<input type='text' placeholder='제품명 검색' onKeyPress={search} />
						<FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
