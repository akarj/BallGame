import propTypes from 'prop-types';

const TableRows = ({ key, bmouseClickNum, rtTime }) => {
	return (
		<>
			<li
				key={key || 'table-head'}
				className="flex flex-row font-semibold w-full"
			>
				<div className="flex-1 border-solid border-[1px] border-white py-2">
					{bmouseClickNum}
				</div>
				<div className="flex-1 border-solid border-[1px] border-white py-2">
					<b>{+rtTime / 1000}&nbsp;s</b>
				</div>
			</li>
		</>
	);
};

TableRows.propTypes = {
	key: propTypes.string,
	bmouseClickNum: propTypes.number,
	rtTime: propTypes.number,
};

export default TableRows;
