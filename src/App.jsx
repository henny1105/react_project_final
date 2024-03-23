import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boxgame from './Components/sub/box/Boxgame';
import Weather from './Components/sub/weather/Weather';
import MainWrap from './Components/main/mainWrap/MainWrap';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainWrap />} />
				<Route path='/rock_scissor_paper' element={<Boxgame />} />
				<Route path='/weather_project' element={<Weather />} />
			</Routes>
		</Router>
	);
}

export default App;
