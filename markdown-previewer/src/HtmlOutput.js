import React from 'react';
import marked from 'marked';

function HtmlOutput(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></div>
  );
};

export default HtmlOutput;
