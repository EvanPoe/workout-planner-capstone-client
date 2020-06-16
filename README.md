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

Nav-bar
:-------------------------:
![Nav-bar](/github-images/wireframes/welcome-page.jpg)



## Screenshots
Landing/Login Page
:-------------------------:
![Landing Page](/github-images/screenshots/login-page-screenshot.png)


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
