import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

	return (
		<div>
			<div>
				<div className='login_button'>
					<FontAwesomeIcon icon={faUser} />
					<Link to='/mall_project/login'>LOGIN</Link>
				</div>
			</div>
			<div className='nav_section'>
				<img
					width={100}
					src='//i.namu.wiki/i/E06gBakO-KgWDjOjktrhQoDPWqpp156itxoyaYuiZw-Akbvrb1dVdPI9O41G2M83KQPh8N1RK1Q1PU02DA2gYgfoCEzYwsiA0R4NBA82tsOwgMP5H2qp8DFZsOXCS2VFb0jlCUVVfuSmlIvcpKahSg.svg'
					alt='로고'
				/>
			</div>
			<div className='menu_area'>
				<ul className='menu_list'>
					{menuList.map((menu) => (
						<li>{menu}</li>
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
