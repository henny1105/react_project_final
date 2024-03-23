import React from 'react';
import { Link } from 'react-router-dom';

function MainWrap() {
	return (
		<div>
			<ul>
				<li>
					<Link to='/rock_scissor_paper'>가위바위보 게임</Link>
				</li>
				<li>
					<Link to='/weather_project'>날씨 프로젝트</Link>
				</li>
			</ul>
		</div>
	);
}

export default MainWrap;
