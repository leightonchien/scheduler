# Interview Scheduler

## Project Description
- Interview Scheduler is a SPA (Single Page Application) built using React that allows users to book and cancel interviews. 
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest tests are used through the development of the project.


### Daily view
!['1-available-slots'](https://github.com/leightonchien/scheduler/blob/master/docs/1-available-slots.png)
_By selecting a weekday on the left panel, user can see booked appointments and available slots for each day._


### New appointment booking
!['2-book-new-appt'](https://github.com/leightonchien/scheduler/blob/master/docs/2-book-new-appt.png)
_User can add interviews to available slots by typing a student name and adding interviewer from the list_


### Interview cancelation
!['3-edit-appt'](https://github.com/leightonchien/scheduler/blob/master/docs/3-edit-appt.png)
_User can cancel an existing appointment by pressing the delete button and interacting with a warning message by pressing a confirm button._


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```


## API server/Database Setup
For full functionality both must run concurrently: the client and the API server applications.
- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with `npm install`
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project `npm start`


## Project Stack
__Front-End:__ React, Axios, JSX, HTML, SASS, JavaScript
__Back-End:__ Express, Node.js, PostgreSQL
__Testing:__ Storybook, Webpack Dev Server, Jest, Testing Library and Cypress