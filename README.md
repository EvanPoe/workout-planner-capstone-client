This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# workout-planner-capstone-client
# Capstone Project Title
One line description of what this app is doing and who is it for

## Working Prototype
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories
This app is for two types of users: a visitor and a logged-in user

#### Welcome Page && What to Expect
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

#### Login Page
* as a returning user
* I want to be able to log in
* so I can access my exercise library

### Sign-up Page
* as a visitor
* I want to be able to sign up
* so I can start building and using my exercise library

### Empty Library
* as a first time user
* I want to be able to create my first workout
* so I can save it to my library

### Filled Library
* as a returning user
* I want to view my workouts in a list form, delete workouts, or add new ones
* so I can select an individual workout

### Workout Builder
* as a user
* I want to create a new workout based on experience and workout type
* so I can add it to my library

### Workout Page
* as a user
* I want to view my workout that I selected from my Library
* so I can follow it and exercise

### Basic Information Page
* as a new user
* I want to view basic information regarding exercise and the website
* so I am aware of the necessary health risks, safety precautions, and technical language

### Nav-bar
* as a user
* I want to view the 'Home', 'Exercise Library', and 'Log-in/Log-out' links
* so I can more easily navigate the website

### Wireframes
Welcome Page
:-------------------------:
![Welcome Page](/github-images/wireframes/welcome-page.jpg)

What to Expect
:-------------------------:
![What to Expect](/github-images/wireframes/what-to-expect.jpg)

Login Page
:-------------------------:
![Login Page](/github-images/wireframes/login-page.jpg)

Sign-up Page
:-------------------------:
![Sign-up Page](/github-images/wireframes/sign-up-page.jpg)

Empty Library
:-------------------------:
![Empty Library](/github-images/wireframes/empty-library.jpg)

Filled Library
:-------------------------:
![Filled Library](/github-images/wireframes/filled-library.jpg)

Workout Builder
:-------------------------:
![Workout Builder](/github-images/wireframes/workout-builder.jpg)

Workout Page
:-------------------------:
![Workout Page](/github-images/wireframes/workout-page.jpg)

Basic Information Page
:-------------------------:
![Basic Information Page](/github-images/wireframes/basic-information.jpg)



## Screenshots
Welcome Page and What to Expect
:-------------------------:
![Landing Page](/github-images/screenshots/welcome-page.png)

Login Page
:-------------------------:
![Login Page](/github-images/screenshots/login-page.png)

Sign-up Page
:-------------------------:
![Sign-up Page](/github-images/screenshots/sign-up-page.png)

Empty Library
:-------------------------:
![Empty Library](/github-images/screenshots/empty-library.png)

Filled Library
:-------------------------:
![LFilled Library](/github-images/screenshots/filled-library.png)

Workout Builder
:-------------------------:
![Workout Builder](/github-images/screenshots/workout-builder.png)

Workout Page
:-------------------------:
![Workout Page](/github-images/screenshots/workout-page.png)

Basic Information Page
:-------------------------:
![Basic Information Page](/github-images/screenshots/basic-information.png)


## Functionality
The app's functionality includes:
* Every User has the ability to create an account

## Business Objects (back-end structure)
* User (database table)
    * Username (email validation)
    * Password (at least 8 chars, at least one alpha and a special character validation)


## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## API Documentation
API Documentation details:
* get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* add more functionality

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test
