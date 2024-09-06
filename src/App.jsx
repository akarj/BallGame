import { useEffect, useState } from 'react';
import './App.css';
import GameArea from './components/GameArea';
import Header from './components/Header';
import ScoreTable from './components/ScoreTable';

function App() {
	const [records, setRecords] = useState([]);
	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);
	const [pause, setPause] = useState(false);
	const [lastUpdate, setLastUpdate] = useState(() => Date.now());
	const [pauseTimes, setPauseTimes] = useState([]);
	const [inter, setInter] = useState(10);
	const [pauseTime, setPauseTime] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	const positionChanger = () => {
		setTop(Math.random() * 100);
		setLeft(Math.random() * 100);
	};

	useEffect(() => {
		positionChanger();
	}, []);

	useEffect(() => {
		if (!pause) {
			if (intervalId) {
				clearInterval(intervalId);
			}

			const newIntervalId = setInterval(() => {
				positionChanger();
			}, inter * 1000);
			setIntervalId(newIntervalId);
		}

		return () => clearInterval(intervalId);
	}, [inter, pause]);

	function onClickHandler(ev) {
		console.log('Click Event:', ev);
		positionChanger();
		setLastUpdate(() => Date.now());

		setRecords(prev => [
			...prev,
			{
				time: new Date().toLocaleTimeString(),
				mouseClickNum: prev.length ? prev.at(-1).mouseClickNum + 1 : 1,
				rtTime: prev.length
					? parseFloat(prev.at(-1).rtTime) +
					  parseFloat((Date.now() - lastUpdate).toFixed(2)) -
					  (pauseTimes.length
							? pauseTimes.reduce((prev, curr) => prev + curr, 0)
							: 0)
					: (Date.now() - lastUpdate).toFixed(2),
			},
		]);

		if (!pause) {
			clearInterval(intervalId);
			const newIntervalId = setInterval(() => {
				positionChanger();
			}, inter * 1000);
			setIntervalId(newIntervalId);
		}
	}

	const startHandler = () => {
		setPause(false);
		const pauseDuration = parseFloat((Date.now() - pauseTime).toFixed(2));
		setPauseTimes(prev => [...prev, pauseDuration]);
	};

	const pauseHandler = () => {
		setPause(true);
		setPauseTime(() => Date.now());
		clearInterval(intervalId);
	};

	const resetHandler = () => {
		setPause(false);
		setLeft(0);
		setTop(0);
		setRecords([]);
		positionChanger();
		setPauseTime(0);
		setPauseTimes([]);
		setLastUpdate(() => Date.now());
		clearInterval(intervalId);
	};

	const onChangeValHandler = e => {
		let value = parseInt(e.target.value);
		if (value < 1) value = 1;
		if (value > 10) value = 10;
		setInter(value);
	};

	return (
		<>
			<div className="app-container">
				<Header
					startHandler={startHandler}
					pauseHandler={pauseHandler}
					resetHandler={resetHandler}
					inputVal={inter}
					onChangeValHandler={onChangeValHandler}
				/>
				<GameArea
					onClickHandler={onClickHandler}
					left={left}
					top={top}
					pause={pause}
				/>
				<ScoreTable records={records} />
			</div>
		</>
	);
}

export default App;
