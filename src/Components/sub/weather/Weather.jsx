import { useEffect, useState } from 'react';
import WeatherBox from './WeatherBox';
import WeatherButton from './WeatherButton';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from 'react-spinners/ClipLoader';

function Weather() {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState('');
	const [loading, setLoading] = useState(false);
	const cities = ['tokyo', 'seoul', 'beijing', 'sydney', 'london'];

	const getWeatherByCurrentLocation = async (lat, lon) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=84bbf1bc16c21571bb35b7478e7b2d24&units=metric`;
		try {
			let response = await fetch(url);
			let data = await response.json();
			setWeather(data);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const getCurrentLocation = () => {
			navigator.geolocation.getCurrentPosition((position) => {
				getWeatherByCurrentLocation(position.coords.latitude, position.coords.longitude);
			});
		};

		getCurrentLocation();
	}, []);

	const getWeatherByCity = async (selectedCity) => {
		setLoading(true);
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=84bbf1bc16c21571bb35b7478e7b2d24&units=metric`;
		try {
			let response = await fetch(url);
			let data = await response.json();
			setWeather(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (city !== '') {
			getWeatherByCity(city);
		}
	}, [city]);

	return (
		<div className='weather_project'>
			<div className='container'>
				{loading ? (
					<ClipLoader color='#f88c6b' loading={loading} size={150} aria-label='Loading Spinner' data-testid='loader' />
				) : (
					<>
						<WeatherBox weather={weather} />
						<WeatherButton cities={cities} setCity={setCity} />
					</>
				)}
			</div>
		</div>
	);
}

export default Weather;
