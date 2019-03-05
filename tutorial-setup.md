# Introduction to React: Hands-On-Practice

## Setting up the create-react-app client

Before we start, we need to setup the **create-react-app client**.

### Installing Node and Yarn

You need to have **Node** installed. If you don't, download and install the latest Long-Term-Support (LTS) version from the [NodeJS website](https://nodejs.org/en/download/).

You also need to have **Yarn** installed. Yarn is a package manager for Javascript projects. It is similar to NPM. If you don't have it installed, type the following command into the command line:
```
npm install -g yarn
```

### Installing create-react-app Client

To install the client, type the following command into the command line:
```
npm install -g create-react-app
```
You can test, whether the client was installed successfully by typing:
```
create-react-app --version
```
You should see something like **2.1.1**. Make sure you have a version bigger or equal to 2.

### Setting up the project with the client

Now move to the parent folder that you want to contain the project. We setup our Markdown Previewer project with the create-react-app client like this:
```
create-react-app markdown-previewer
```
The client will now install everything we need for us in the project folder **markdown-previewer**. We don't have to deal with any webpack or other kinds of setup. Many things work out of the box, e.g. CSS Modules.

### Starting the sample application

We change into the project folder:
```
cd markdown-previewer
```
The project folder already contains a sample application. Whenever we are in the project folder, we can start the application by typing:
```
yarn start
```
Now the application gets started. In a web browser, we can now access the application by entering the following address:
```
localhost:3000
```
**localhost** is a server that runs locally and hosts our React application.

It is in **watch-mode**, that means, whenever we make changes in our source code, it will automatically update the output in our browser, so you don't have to refresh manually.

### Stopping the application

Whenever you want to stop the app, you can press the following keys in the command line:
```
Control + C
```

### Getting rid of the sample application

All files of our React application are now in the **src** folder. So let's open that folder in our code editor.

There is already one React component defined. It is called **App** and it is in the **App.js** file. We want to start our project fresh, so let's get rid of the example and delete everything in App.js.

We now have an empty App.js file, and it's time to really get started.

Next: [Step 1: Start with a mock, and break the UI into a component hierarchy](tutorial-step1.md)