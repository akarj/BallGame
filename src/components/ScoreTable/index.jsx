import Row from './Row';
import propTypes from 'prop-types';
/**
 *
 * @param {{
 * id:String,
 * mouseClickNum: String,
 * rtTime: String
 * }[]} records
 * @returns
 */
const ScoreTable = ({ records }) => {
	return (
		<>
			<ul className="w-full b g-red-100 mt-12">
				<li key={'table-head'} className="flex flex-row font-semibold w-full">
					<div className="flex-1 border-solid border-[1px] border-white py-2">
						Mouse click number
					</div>
					<div className="flex-1 border-solid border-[1px] border-white py-2">
						Reaction Time
					</div>
				</li>
				{records.map(record => (
					<Row
						key={record.id}
						bmouseClickNum={record.mouseClickNum}
						rtTime={record.rtTime}
					/>
				))}
			</ul>
		</>
	);
};

ScoreTable.propTypes = {
	records: propTypes.arrayOf(propTypes.object).isRequired,
};
export default ScoreTable;
