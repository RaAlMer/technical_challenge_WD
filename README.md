# The Phone Cave (WD)

At The Phone Cave we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

## The challenge (Duration: 3 hours)

Your task consists of creating an app showing our catalog. Follow the steps detailed below to complete the task. **You have 3 hours to do so.**

### Iteration #1

Create a REST API (NodeJS) server that meets the following requirements:

| Route         | HTTP Verb | Description                                          |
| ------------- | --------- | ---------------------------------------------------- |
| `/phones`     | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id` | GET       | Show a phone details                                 |

### Iteration #2

Create a React application that communicates with the API you created before. Your React app should be using the **hooks** approach.

- Use Axios (or a similar library) in order to obtain data from the REST API
- Show a list with all the phones
- When a phone model is selected from the list, a detailed view of the phone is shown with a few specific details displayed. This display should be on the same page than the list of phones.
- Show a spinner component or a position marker while the API request is processing (display a simulation if there is no loading time)

### Iteration #3

Make it look **eye-appealing**. There is no need to develop a sophisticated design, but it should not look terrible when viewed from a phone. Add images of each device.

Once done with this, do a pull request to submit your work.

## Deadline

You have three hours to work on this challenge.
In the event that after three hours you do not have the MVP objectives ready, send the pull request indistinctly. This is a speed challenge.

## Must-have Deliverables

- Functioning code (server and client side)
- Short README file describing what is the app about and add instructions on how to use it.

# How to install

## Languages & Libraries

First of all, you have NodeJS installed by covering the official [NodeJS](https://nodejs.org/en/) documentation.
Once you have it, you can install and compile all dependencies using the following commands:

```bash
npm install
```

This must be done both in the frontend and backend folders.

## Environmental Variables

Both on the frontend and backend a .env file must be created.
This file must contain the following variables:

- Backend:
  - `PORT`: The number of the Port to be used by the server. Example: `PORT=4000`

- Frontend:
  - `REACT_APP_BACKEND`: The URL of the backend to be used by the frontend. Example: `REACT_APP_BACKEND=http://localhost:4000`

## Server

To start the application node server, run:

```bash
npm start
```

in the backend folder.

## Client

To start the ReactJS client side, run:

```bash
npm start
```

in the frontend folder.

# App's Description

It is a SPA (Single Page Application) with two main routes:

- `/phones`: shows a list of phones
- `/phones/:id`: shows a detailed view of a phone

You can navigate between routes using the navbar or clicking on the phone you want to check.
