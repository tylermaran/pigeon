import {
	StyledCell,
	StyledHeadCell,
	StyledRow,
	StyledTable,
	TableContainer,
} from './styledComponents';

const QueryTable = ({ data }) => {
	console.log(data);
	if (data.length > 0) {
		const headers = Object.keys(data[0]).map((el) => {
			return <StyledHeadCell key={el}>{el}</StyledHeadCell>;
		});

		const rows = data.map((el, i) => {
			const cells = Object.keys(el).map((key, i) => {
				return (
					<StyledCell key={el[key] + i}>
						{el[key] || 'null'}
					</StyledCell>
				);
			});
			const row = <StyledRow key={i}>{cells}</StyledRow>;
			return row;
		});

		return (
			<TableContainer>
				<StyledTable>
					<thead>
						<StyledRow>{headers}</StyledRow>
					</thead>
					<tbody>{rows}</tbody>
				</StyledTable>
			</TableContainer>
		);
	}
	return <div></div>;
};

export default QueryTable;
