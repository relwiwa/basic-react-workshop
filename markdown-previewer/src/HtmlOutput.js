import React from 'react';
import marked from 'marked';

import styles from './HtmlOutput.module.css';

function HtmlOutput(props) {
  return (
    <div
      className={styles.htmlOutput}
      dangerouslySetInnerHTML={{__html: marked(props.markdown)}}
    ></div>
  );
};

export default HtmlOutput;
