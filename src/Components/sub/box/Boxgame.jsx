import './Box.css';
import React, { useReducer } from 'react';
import Box from './Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정색)

const choice = {
	rock: {
		name: 'Rock',
		img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
	},
	scissors: {
		name: 'scissors',
		img: 'https://i5.walmartimages.com/seo/PLUS-Fit-Cut-Curve-Sissors-Micro-Serrated-Blade-Green_aa4cbb2c-3501-4293-b363-5194ec5755b4.69fa6b5f5aae30e7e5e97fa2e520f4ae.jpeg',
	},
	paper: {
		name: 'paper',
		img: 'https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717545600&semt=ais_user',
	},
};

function Boxgame() {
	const play = (userChoice) => {
		console.log('select', userChoice);
	};
	return (
		<div className='box_game'>
			<div className='main'>
				<Box title='You' />
				<Box title='Computer' />
			</div>
			<div className='main'>
				<button onClick={() => play('scissors')}>가위</button>
				<button onClick={() => play('rock')}>바위</button>
				<button onClick={() => play('paper')}>보</button>
			</div>
		</div>
	);
}

export default Boxgame;

// 1. 함수 즉시 실행
// onClick={play('scissors')}와 같이 작성하면 컴포넌트가 랜더링될 때
// play('scissors')가 즉시 실행되고, 그 반환 값이 onClick에 할당됨

// 2. 함수 참조 전달
// onClick={() => play('scissors')}는 함수 참조를 전달
// 클릭 이벤트가 발생할 때, 이 익명 함수가 실행되고, 그 안에서 play('scissors')가 호출
