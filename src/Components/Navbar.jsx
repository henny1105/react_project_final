import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // 로그아웃 아이콘을 위해 추가
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setAuthenticate }) => {
	const menuList = ['WOMAN', 'MAN', 'KIDS', 'HOME', '향수'];
	const navigate = useNavigate();

	const handleAuthClick = () => {
		if (isAuthenticated) {
			// 로그아웃 처리
			setAuthenticate(false);
			navigate('/mall_project'); // 로그아웃 후 메인 페이지로 이동
		} else {
			// 로그인 페이지로 이동
			navigate('/mall_project/login');
		}
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
				<div className='login_button_box' onClick={handleAuthClick}>
					<div className='login_button'>
						<FontAwesomeIcon icon={isAuthenticated ? faSignOutAlt : faUser} />
						<div>{isAuthenticated ? 'LOG OUT' : 'LOGIN'}</div>
					</div>
				</div>
				<div className='nav_section' onClick={goToMain}>
					<img width={200} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png' alt='logo' />
				</div>
				<div className='menu_area'>
					<ul className='menu_list'>
						{menuList.map((menu, index) => (
							<li key={menu}>{menu}</li>
						))}
					</ul>
					<div className='search_box'>
						<input type='text' placeholder='Search products' onKeyPress={search} />
						<FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
