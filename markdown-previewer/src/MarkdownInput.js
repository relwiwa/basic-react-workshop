import React from 'react';

import styles from './MarkdownInput.module.css';

function MarkdownInput(props) {
	return (
		<textarea
			className={styles.markdownInput}
			onChange={props.handleChange}
			placeholder="Enter markdown"
			value={props.markdown}
		/>
	);
};

export default MarkdownInput;
