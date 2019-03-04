import React from 'react';

function MarkdownInput(props) {
	return (
		<textarea
			className="form-control"
			onChange={props.handleChange}
			placeholder="Enter markdown"
			value={props.markdown}
		/>
	);
};

export default MarkdownInput;
