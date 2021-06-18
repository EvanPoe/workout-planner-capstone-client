# Workout Planner Capstone

A site that allows users to build workouts according to difficulty and type. Users can create an account, add, delete, and view workouts which are saved to their profile on the server.

## Working Prototype

You can access a working prototype of the React app here: https://workout-planner-capstone.vercel.app/ and Node app here: https://workout-planner-capstone.herokuapp.com/

## User Stories

This app is for two types of users: a visitor and a logged-in user

#### Welcome Page && What to Expect

- as a visitor
- I want to understand what I can do with this app (or sign up, or log in)
- so I can decide if I want to use it

#### Login Page

- as a returning user
- I want to be able to log in
- so I can access my exercise library

### Sign-up Page

- as a visitor
- I want to be able to sign up
- so I can start building and using my exercise library

### Empty Library

- as a first time user
- I want to be able to create my first workout
- so I can save it to my library

### Filled Library

- as a returning user
- I want to view my workouts in a list form, delete workouts, or add new ones
- so I can select an individual workout

### Workout Builder

- as a user
- I want to create a new workout based on experience and workout type
- so I can add it to my library

### Workout Page

- as a user
- I want to view my workout that I selected from my Library
- so I can follow it and exercise

### Basic Information Page

- as a new user
- I want to view basic information regarding exercise and the website
- so I am aware of the necessary health risks, safety precautions, and technical language

### Nav-bar

- as a user
- I want to view the 'Home', 'Exercise Library', and 'Log-in/Log-out' links
- so I can more easily navigate the website

### Wireframes

Welcome Page
:-------------------------:
![Welcome Page](/github-images/wireframes/welcome-page.jpg)
What to Expect
![What to Expect](/github-images/wireframes/what-to-expect.jpg)
Login Page
![Login Page](/github-images/wireframes/login-page.jpg)
Sign-up Page
![Sign-up Page](/github-images/wireframes/sign-up-page.jpg)
Empty Library
![Empty Library](/github-images/wireframes/empty-library.jpg)
Filled Library
![Filled Library](/github-images/wireframes/filled-library.jpg)
Workout Builder
![Workout Builder](/github-images/wireframes/workout-builder.jpg)
Workout Page
![Workout Page](/github-images/wireframes/workout-page.jpg)
Basic Information Page
![Basic Information Page](/github-images/wireframes/basic-information.jpg)

## Screenshots

Welcome Page and What to Expect
:-------------------------:
![Landing Page](/github-images/screenshots/welcome-page.png)
Login Page
![Login Page](/github-images/screenshots/login-page.png)
Sign-up Page
![Sign-up Page](/github-images/screenshots/sign-up-page.png)
Library
![Empty Library](/github-images/screenshots/library.png)
Workout Builder
![Workout Builder](/github-images/screenshots/workout-builder.png)
Workout Page
![Workout Page](/github-images/screenshots/workout-page.png)
Basic Information Page
![Basic Information Page](/github-images/screenshots/basic-information.png)

## Functionality

The app's functionality includes:

- Every User has the ability to create an account

## Front-end Structure - React Components Map

- **Index.js** (stateless)
  - **App.js** (stateful)
    - **Home.js** (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the **App.js**
      - **Login.js** (stateful) -
      - **Signup.js** (stateful) -
    - **Nav.js** (stateless) -
    - **BasicInfo.js** (stateless) -
    - **Library.js** (second)(stateful) - receives workouts from user's database AND from Builder.js and renders Links to each Workout.js
      - **Builder.js** (first)(stateful) - this component fetches a single workout from the database and sends that data to the Library.js
      - **Workout.js** (third)(stateful) - render the exercises from the single workout passed to this component

## Back-end Structure - Business Objects

- Users (database table)
  - User ID
  - Email (email validation)
  - Password (at least one number, one lowercase and one uppercase letter at least eight characters that are letters, numbers or the underscore validation)
- Workouts (database table)
  - Workout ID
  - User ID
  - Type (Upper body, Lower body)
  - Difficulty (Beginner, Intermediate, Advanced)
- Exercises (database table)
  - Exercise ID
  - Workout ID
  - Name
  - Image
  - Description & Instruction
  - Sets and Reps
  - Rest Period
  - is_upper (boolean: true or false)
  - is_lower (boolean: true or false)
  - is_beginner (boolean: true or false)
  - is_intermediate (boolean: true or false)
  - is_advanced (boolean: true or false)

## Technology

- Front-End: HTML5, CSS3, JavaScript ES6, React
- Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
- Development Environment: Heroku, DBeaver

## API Documentation

API Documentation details:

#### API Overview

```text
    /api
    .
    ├── /auth
    │   └── POST
    │       ├── /login
    ├── /users
    │   └── POST
    │       └── /
    ├── /workouts
    │   └── POST
    │       └── /
    │   └── GET
    │       └── /users/:userId
    │   └── GET
    │       └── /users/:userId/:difficulty/:type
    │   └── DELETE
    │       └── /:workoutId
    ├── /user-exercises
    │   └── POST
    │       └── /
    │   └── GET
    │       └── /
    │   └── GET
    │       └── /:exerciseId
    │   └── GET
    │       └── /workout/:workoutId
    ├── /exercises-templates
    │   └── GET
    │       └── /
```

##### POST `/api/auth/login`

```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "Password1"
    }

    // res.body
    {
    "authToken": String,
        "userId": 1
    }
```

##### POST `/api/users`

```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "123456"
    }


    // res.body
    {
        "id": 1,
        "user_name": "demo@gmail.com"
    }
```

##### POST `/api/workouts`

```js
    // req.body
    {
        "user_id": 4,
        "type": "upper",
        "difficulty": "intermediate"
    }


    // res.body
    {
        "id": 77,
        "user_id": 4,
        "type": "upper",
        "difficulty": "intermediate"
    }
```
##### GET `/api/workouts/users/:userId`

```js
    // res.body
    [
        {
            "id": 43,
            "user_id": 3,
            "type": "upper",
            "difficulty": "intermediate"
        },
        {
            "id": 44,
            "user_id": 3,
            "type": "upper",
            "difficulty": "advanced"
        },
        {
            "id": 47,
            "user_id": 3,
            "type": "lower",
            "difficulty": "advanced"
        }
    ]
```
##### GET `/api/workouts/users/:userId/:difficulty/:type`

```js
    // res.body
    [
        {
            "id": 10,
            "user_id": 4,
            "type": "upper",
            "difficulty": "advanced"
        }
    ]
```
##### DELETE `/api/workouts/:workoutId`

```js
    // res.body
    []
```
##### POST `/api/user-exercises`

```js
    // req.body
    {
		"workout_id": "2",
		"name": "Pushup",
        "image": "image.jpg",
        "description": "an exercise in which a person lies facing the floor and, keeping their back straight, raises their body by pressing down on their hands.",
        "sets": "3",
        "rest": "30 Seconds",
        "is_upper": 1,
        "is_lower": 0,
        "is_beginner": 0,
        "is_intermediate": 1,
        "is_advanced": 0
}


    // res.body
    {
		"workout_id": "2",
		"name": "Pushup",
        "image": "image.jpg",
        "description": "an exercise in which a person lies facing the floor and, keeping their back straight, raises their body by pressing down on their hands.",
        "sets": "3",
        "rest": "30 Seconds",
        "is_upper": 1,
        "is_lower": 0,
        "is_beginner": 0,
        "is_intermediate": 1,
        "is_advanced": 0
    }
```
##### GET `/api/user-exercises`

```js
    // res.body
    [
        {
            "id": 3,
            "workout_id": 43,
            "name": "Overhead Press",
            "image": "overhead-press.jpg",
            "description": "The overhead press (abbreviated OHP) or shoulder press is a weight training exercise performed while standing, in which a weight is pressed straight upwards from racking position until the arms are locked out overhead.",
            "sets": "3",
            "rest": "60 Seconds",
            "is_upper": 1,
            "is_lower": 0,
            "is_beginner": 0,
            "is_intermediate": 1,
            "is_advanced": 0
        },
        {
            "id": 4,
            "workout_id": 43,
            "name": "Pullover",
            "image": "pullover.jpg",
            "description": "The pullover is an exercise that is performed with either a dumbbell or a barbell. Pullovers can be made to affect either the chest or the back depending on how wide the grip is (barbell) and the position of the shoulders.",
            "sets": "3",
            "rest": "60 Seconds",
            "is_upper": 1,
            "is_lower": 0,
            "is_beginner": 0,
            "is_intermediate": 1,
            "is_advanced": 0
        }
    ]
```
##### GET `/api/user-exercises/:exerciseId`

```js
    // res.body
    {
        "id": 21,
        "workout_id": 47,
        "name": "Barbell Back Squat",
        "image": "back-squat.jpg",
        "description": "The back squat is a basic barbell strength exercise for the lower body with an emphasis on the quads, hamstrings, and glutes.",
        "sets": "3",
        "rest": "90 Seconds",
        "is_upper": 0,
        "is_lower": 1,
        "is_beginner": 0,
        "is_intermediate": 0,
        "is_advanced": 1
    }
```
##### GET `/api/user-exercises/workout/:workoutId`

```js
    // res.body
    [
        {
            "id": 3,
            "workout_id": 43,
            "name": "Overhead Press",
            "image": "overhead-press.jpg",
            "description": "The overhead press (abbreviated OHP) or shoulder press is a weight training exercise performed while standing, in which a weight is pressed straight upwards from racking position until the arms are locked out overhead.",
            "sets": "3",
            "rest": "60 Seconds",
            "is_upper": 1,
            "is_lower": 0,
            "is_beginner": 0,
            "is_intermediate": 1,
            "is_advanced": 0
        },
        {
            "id": 4,
            "workout_id": 43,
            "name": "Pullover",
            "image": "pullover.jpg",
            "description": "The pullover is an exercise that is performed with either a dumbbell or a barbell. Pullovers can be made to affect either the chest or the back depending on how wide the grip is (barbell) and the position of the shoulders.",
            "sets": "3",
            "rest": "60 Seconds",
            "is_upper": 1,
            "is_lower": 0,
            "is_beginner": 0,
            "is_intermediate": 1,
            "is_advanced": 0
        }
    ]
```
##### GET `/api/exercises-templates`

```js
    // res.body
    [
        {
            "id": 1,
            "name": "Bench Press",
            "image": "bench-press.jpg",
            "description": "The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench",
            "sets": "3",
            "rest": "60 Seconds",
            "is_upper": 1,
            "is_lower": 0,
            "is_beginner": 0,
            "is_intermediate": 1,
            "is_advanced": 0
        },
        {
            "id": 2,
            "name": "Lat Pull",
            "image": "lat-pull.jpg",
            "description": "The pulldown exercise is a strength training exercise designed to develop the latissimus dorsi muscle.",
            "sets": "3",
            "rest": "60 Seconds",
            "is_upper": 1,
            "is_lower": 0,
            "is_beginner": 0,
            "is_intermediate": 1,
            "is_advanced": 0
        }
    ]
```

## Responsive

App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap

This is v1.0 of the app, but future enhancements are expected to include:

- add more functionality

## How to run it

Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts

- To install the node project ===> npm install
- To migrate the database ===> npm run migrate -- 1
- To run Node server (on port 8000) ===> npm run dev
- To run tests ===> npm run test

### Local React scripts

- To install the react project ===> npm install
- To run react (on port 3000) ===> npm start
- To run tests ===> npm run test
