import { StyledTextArea } from './styledComponents';

const QueryContainer = ({ query, setQuery, handleSubmit }) => {
	const handleKeydown = (e) => {
		const { key, ctrlKey } = e;
		if (key === 'Enter' && ctrlKey) {
			e.preventDefault();
			handleSubmit();
		}
	};

	return (
		<StyledTextArea
			onKeyDown={(e) => handleKeydown(e)}
			onChange={(e) => setQuery(e.target.value)}
			value={query}
		/>
	);
};

export default QueryContainer;
