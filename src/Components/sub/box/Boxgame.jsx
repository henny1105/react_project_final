import './Box.css';
import Box from './Box';
import { useState } from 'react';

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
	const [useSelect, setUserSelect] = useState(null);
	const [compuserSelect, setCompuserSelect] = useState(null);
	const [result, setResult] = useState('');

	const play = (userChoice) => {
		setUserSelect(choice[userChoice]);

		let computerChoice = randomChoice();
		setCompuserSelect(computerChoice);

		setResult(judgement(choice[userChoice], computerChoice));
	};

	const judgement = (user, computer) => {
		if (user.name === computer.name) {
			return 'draw';
		} else if (user.name === 'Rock') {
			return computer.name === 'scissors' ? 'win' : 'lose';
		} else if (user.name === 'scissors') {
			return computer.name === 'paper' ? 'win' : 'lose';
		} else if (user.name === 'paper') {
			return computer.name === 'rock' ? 'win' : 'lose';
		}
	};

	const randomChoice = () => {
		let itemArray = Object.keys(choice); // ['rock', 'scissors', 'paper']
		// 객체의 키값만 뽑아서 array로 만들어주는 함수
		let randomItem = Math.floor(Math.random() * itemArray.length);
		let final = itemArray[randomItem];
		return choice[final];
	};

	// Math.floor() : 소수점 이하를 버림
	// Math.random() : 0이상 1미만의 랜덤한 숫자를 반환

	return (
		<div className='box_game'>
			<div className='main_all'>
				<div className='main'>
					<Box title='You' item={useSelect} result={result} />
					<Box title='Computer' item={compuserSelect} result={result} />
				</div>
				<div className='main'>
					<button className='button' onClick={() => play('scissors')}>
						가위
					</button>
					<button className='button' onClick={() => play('rock')}>
						바위
					</button>
					<button className='button' onClick={() => play('paper')}>
						보
					</button>
				</div>
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
