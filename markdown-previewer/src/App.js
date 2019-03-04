import React from 'react';
import { useState } from 'react';
import MarkdownInput from './MarkdownInput.js';
import HtmlOutput from './HtmlOutput.js';

import styles from "./App.module.css";

function App() {
	const [markdown, setMarkdown] = useState('This **markdown** gets transformed into HTML');
	
	function handleChange(event) {
		setMarkdown(event.target.value);
	}
	
	return (
		<div>
			<h1 className={styles.headline}>Markdown Previewer</h1>
			<div className={styles.container}>
				<MarkdownInput
					markdown={markdown}
					handleChange={handleChange}
				/>
				<HtmlOutput
					markdown={markdown}
				/>
			</div>
		</div>
	);
}

export default App;
