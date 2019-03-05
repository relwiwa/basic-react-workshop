# Introduction to React: Hands-On-Practice

## Step 4: Identify Where Your State Should Live

### Where to put our state?

Now we need to find out, where to put our state.

In general, you always try to lift your state up as much as possible in the component hierarchy. For more complex applications like ours, you can read more about that in the React Documentation: [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html).

In our case it makes sense to put the state into the parent App component. Like this, we can use the state for both child components.

### Create a state-ful component

So far, we have used functional components without state. So so far, they have been stateless components, they only displayed UI.

You can turn any stateless into a **stateful component**. For functinal components, we have to use the **useState-Hook** to do that.

In general, you try to have **as little stateful components as possible**. Because whenever there is state, it means, React has to monitor it. When it is just a stateless component, there is nothing to monitor.

So always try to start with a stateless component, and only turn it into a stateful component, when it becomes necessary.

### Add useState Hook

Let's change our App component from a stateless to a stateful component by using the useState-Hook.

First, we import the useState Hook on top of our file:
```
import { useState } from 'react';
```

Then we add the markdown state to our App component:
```
function App() {
  const [markdown, setMarkdown] = useState('');
	return (
		<div>
			<h1>Markdown Previewer</h1>
			<MarkdownInput />
			<HtmlOutput
				markdown="# A Sample Header"
			/>
		</div>
	);
}
```

#### What did we do?
* We defined our markdown **state object** inside the App functional component. We used the useState Hook to that. The hook returns an array with two fields. We use **array destructuring syntax** to access markdown, and setMarkdown.
* markdown is the state variable
* setMarkdown is used to update the markdown state variable. It's important to only use this function when we want to update the markdown state variable.
* We also initialized the markdown state variable to an empty string.

### Pass state to child components as props

So far, our HtmlOutput component displays a hard coded placeholder string, that we pass as an attribute.

Let's use the value from our state instead:
```
<HtmlOutput
  markdown={markdown}
/>
```
* We use the curly braces again to access the value from our state object.
* Now, every time our markdown changes, the HtmlOutput component gets re-rendered with the new value!

### Setting the value of MarkdownInput

We also want our MarkdownInput component to use the value from the state. So let's also pass it to it:
```
<MarkdownInput
  markdown={markdown}
/>
```
Now, also the MarkdownInput component receives the markdown from the state.

This is one of the key features of React: **data flows from top to bottom**. The child component receives its value from the parent component.

**What is state in the parent component, becomes props in the child component. Child components can never change props. Only state can be changed in the parent component. Like this, changes in state affect the props of child components** and UI updates take place.

In the MarkdownInput component, we now can use the markdown via **props**:
```
function MarkdownInput(props) {
  return (
    <textarea
      placeholder="Enter markdown"
      value={props.markdown}
    />
  );
};
```
#### What did we do?
* As our functional component now receives props, we need to add props as an argument to the function.
* Inside the textarea attribute, we set the value of the textarea to the markdown we receive via props.

Now, both our MarkdownInput and HtmlOuput component are linked to the markdown value from state. They will always be **in sync** and display the same value.

### Default text

So far, we don't display anything in the beginning, as we set the markdown state property to an empty string.

Let's change that in App.js to display a **default text**:
```
  const [markdown, setMarkdown] = useState('This **markdown** gets transformed into HTML');
```
When you now check your browser, you will see that the default text gets displayed in both of our components.

Next: [Step 5: Add Inverse Data Flow](tutorial-step5.md)