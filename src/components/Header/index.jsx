import propTypes from 'prop-types';
const Header = ({
	startHandler,
	pauseHandler,
	resetHandler,
	inputVal,
	onChangeValHandler,
}) => {
	return (
		<>
			<div className="header-container max-w-[80rem] flex justify-between">
				<button className="w-32" onClick={startHandler}>
					Start
				</button>
				<button className="w-32" onClick={pauseHandler}>
					Pause
				</button>
				<button className="w-32" onClick={resetHandler}>
					Reset
				</button>
				<div className="interval-container flex justify-center items-center text-center flex-row gap-4 font-semibold">
					<label htmlFor="interval">Interval (in sec)</label>
					<input
						type="number"
						value={inputVal}
						onChange={onChangeValHandler}
						className="pl-2"
						id="interval"
					/>
				</div>
			</div>
		</>
	);
};

Header.propTypes = {
	startHandler: propTypes.func,
	pauseHandler: propTypes.func,
	resetHandler: propTypes.func,
	inputVal: propTypes.number,
	onChangeValHandler: propTypes.func,
};

export default Header;
