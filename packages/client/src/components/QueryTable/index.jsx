import {
	ExtraRows,
	StyledCell,
	StyledHeadCell,
	StyledRow,
	StyledTable,
	TableContainer,
} from './styledComponents';

const QueryTable = ({ data }) => {
	const { result, rowCount } = data;

	if (result.length > 0) {
		const headers = Object.keys(result[0]).map((el, i) => {
			return <StyledHeadCell key={'head=' + i}>{el}</StyledHeadCell>;
		});

		const rows = result.map((el, i) => {
			const cells = Object.keys(el).map((key, j) => {
				const getDisplayValue = (value) => {
					if (value === null) return 'null';
					if (value === '') return '""';
					return value;
				};
				return (
					<StyledCell key={'cell-' + i + '-' + j}>
						{getDisplayValue(el[key])}
					</StyledCell>
				);
			});
			const row = <StyledRow key={'row-' + i}>{cells}</StyledRow>;
			return row;
		});

		const additionalRows = () => {
			if (rowCount > result.length) {
				return (
					<ExtraRows>
						+ {rowCount - result.length} additional rows
					</ExtraRows>
				);
			}
			return null;
		};

		return (
			<TableContainer>
				<StyledTable>
					<thead>
						<StyledRow>{headers}</StyledRow>
					</thead>
					<tbody>{rows}</tbody>
				</StyledTable>
				{additionalRows()}
			</TableContainer>
		);
	}
	return <div></div>;
};

export default QueryTable;
