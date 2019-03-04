import React from 'react';
import { useState } from 'react';
import MarkdownInput from './MarkdownInput.js';
import HtmlOutput from './HtmlOutput.js';

function App() {
	const [markdown, setMarkdown] = useState('This **markdown** gets transformed into HTML');
	
	function handleChange(event) {
		setMarkdown(event.target.value);
	}
	
	return (
		<div className="container">
			<h1 className="text-center">Markdown Previewer</h1>
			<div className="row">
				<div className="col col-12 col-md-6">
					<MarkdownInput
						markdown={markdown}
						handleChange={handleChange}
					/>
				</div>
				<div className="col col-12 col-md-6">
					<HtmlOutput
						markdown={markdown}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
