import proptypes from 'prop-types';

const GameArea = ({ top = 0, left = 0, onClickHandler, pause }) => {
	return (
		<>
			<div className="game-container h-64 border-solid border-2 hover:border-blue-500 rounded mt-8 relative">
				<div
					className="h-[10px] w-[10px] bg-red-700 absolute cursor-pointer"
					style={{
						top: `${top}%`,
						left: `${left}%`,
						display: pause ? 'none' : 'block',
					}}
					onClick={onClickHandler}
				>
					&nbsp;
				</div>
			</div>
		</>
	);
};

GameArea.propTypes = {
	top: proptypes.number,
	left: proptypes.number,
	pause: proptypes.bool,
	onClickHandler: proptypes.func,
};

export default GameArea;
