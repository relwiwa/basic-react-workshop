# Introduction to React: Hands-On-Practice

## Use CSS Modules for some styling

Finally, we want to make the Markdown Previewer look a little nicer. We will use CSS Modules to define styles, that are tied to the component they are related to. Unlike regular CSS, they don't pollute the global CSS space, but are **local by default**.

## Style the App component

In order to style the App component, we have to create a new file with the following name:
```
App.module.css
```
The create-react-app client supports CSS Modules, but it's important to follow the **pattern of [Componentname]module.css** for the file name.

In App.module.css we define the following styles:
```
.headline {
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: 50% 50%;
}
```

We defined two classes. Now let's add them to the elements in App.js.

First, we need to import the style file on top of our App.js:
```
import styles from "./App.module.css";
```
**styles** is a **Javascript object**, that contains the classnames defined in App.module.css. Now, we can add them to our elements. Beware that in JSX we cannot use the class attribute, but we have to use the **className** attribute to assign style classes to elements:
```
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
```
### What will happen
* When the component gets compiled, the class names will be transformed to an individual, **hashed name**, e.g. App_headline_x2dd2sjs. Like this, they are unique and this ensures that they are local.

## Style the MarkdownInput component

In order to style the MarkdownInput component, we have to create another file with the following name:
```
MarkdownInput.module.css
```
In it we define the following styles:
```
.markdownInput {
  font-family: monospace;
  width: 350px;
  height: 150px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 2px 2px 1px gray;
}
```
Then we import the style file in MarkdownInput.js:
```
import styles from './MarkdownInput.module.css';
```
Now we can assign the style classes to the elements:
```
return (
  <textarea
    className={styles.markdownInput}
    onChange={props.handleChange}
    placeholder="Enter markdown"
    value={props.markdown}
  />
);
```
## Style the HtmlOutput component

In order to style the HtmlOutput component, we have to create another file with the following name:
```
HtmlOutput.module.css
```
In it we define the following styles:
```
.htmlOutput {
  font-family: Arial, Helvetica, sans-serif;
  width: 350px;
  margin: 0 auto; 
}
```
Then we import the style file in HtmlOutput.js:
```
import styles from './HtmlOutput.module.css';
```
Now we can assign the style classes to the elements:
```
return (
  <div
    className={styles.htmlOutput}
    dangerouslySetInnerHTML={{__html: marked(props.markdown)}}
  ></div>
);
```

And that's it. You completed the MarkdownPreviewer, the first challenge in freeCodeCamp's Data Visualization Certification!