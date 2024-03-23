import { useEffect, useState } from 'react';
import './Weather.css';

// 1. 앱이 실행되자마자 실행기반의 날씨 정보가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태 정보가 들어간다.
// 3. 5개의 버튼이 있다.(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

function Weather() {
	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;

			getWeatherByCurrentLocation(lat, lon);
		});
	};

	const getWeatherByCurrentLocation = async (lat, lon) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=84bbf1bc16c21571bb35b7478e7b2d24`;
		let response = await fetch(url);
		let data = await response.json();
		console.log('data', data);
	};
	useEffect(() => {
		getCurrentLocation();
	}, []);

	return <div>dd</div>;
}

export default Weather;

//
