import React from 'react';

const Box = (props) => {
	const defaultImg =
		'https://mblogthumb-phinf.pstatic.net/MjAyMjExMTRfMjE1/MDAxNjY4NDAwMTczODU1.7MY5hU2Dwjd--rs0mFnq5tfDEaHcJiDAJ09cUSRQLl0g.op4o41VoeOWxkPuY-v22LJfmrXJpSBOx8np9Fi6jK9Yg.JPEG.surgeonchoi02/220807_Inkigayo_NewJeans_Minji_-_Cookie.jpg?type=w800';

	let result;

	if (props.title === 'Computer' && props.result !== 'draw' && props.result !== '') {
		result = props.result === 'win' ? 'lose' : 'win';
	} else {
		result = props.result;
	}
	return (
		<div className={`box ${result}`}>
			<h1>{props.title}</h1>
			<img className='item-img' src={props.item ? props.item.img : defaultImg} alt='결과값' />
			<h2>{result}</h2>
		</div>
	);
};

export default Box;
// null은 flase를 return함
