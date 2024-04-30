import './Box.css';
import React, { useReducer } from 'react';
import Box from './Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정색)

const choices = {
	rock: {
		name: 'Rock',
		img: 'https://i.namu.wiki/i/EbHl4I2dCr3aoC7AFjMYv7zBAFQTE0Cr0-r2XiIKLakxARH3BY9eonE3AZ2_ctET_2vpLI-piN4F224wAUdyyQ.webp',
	},
	scissors: {
		name: 'Scissors',
		img: 'https://img.animalplanet.co.kr/news/2020/05/20/700/al43zzl8j3o72bkbux29.jpg',
	},
	paper: {
		name: 'Paper',
		img: 'https://pbs.twimg.com/media/CXuloe2UQAAdoMJ.jpg',
	},
};

const initialState = {
	userSelect: null,
	computerSelect: null,
	result: '',
};

function reducer(state, action) {
	switch (action.type) {
		case 'PLAY':
			const { userChoice, computerChoice, result } = action.payload;
			return {
				...state,
				userSelect: userChoice,
				computerSelect: computerChoice,
				result,
			};
		default:
			return state;
	}
}

function judgement(user, computer) {
	if (user.name === computer.name) {
		return 'tie';
	} else if ((user.name === 'Rock' && computer.name === 'Scissors') || (user.name === 'Scissors' && computer.name === 'Paper') || (user.name === 'Paper' && computer.name === 'Rock')) {
		return 'win';
	}
	return 'lose';
}

function randomChoice() {
	const choicesKeys = Object.keys(choices);
	const randomIndex = Math.floor(Math.random() * choicesKeys.length);
	return choices[choicesKeys[randomIndex]];
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const play = (userChoice) => {
		const computerChoice = randomChoice();
		const result = judgement(choices[userChoice], computerChoice);
		dispatch({
			type: 'PLAY',
			payload: { userChoice: choices[userChoice], computerChoice, result },
		});
	};

	return (
		<div>
			<div className='main'>
				<Box title='You' item={state.userSelect} result={state.result} />
				<Box title='Computer' item={state.computerSelect} result={state.result} />
			</div>
			<div className='main'>
				<button onClick={() => play('scissors')}>Scissors</button>
				<button onClick={() => play('rock')}>Rock</button>
				<button onClick={() => play('paper')}>Paper</button>
			</div>
		</div>
	);
}

export default App;
