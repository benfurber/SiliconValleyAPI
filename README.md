# Silicon Valley API

![Screenshot of the frontend](https://github.com/benfurber/SiliconValleyAPI/blob/master/docs/screenshot.png "Screenshot of the frontend")

A backend and frontend for presenting episodes of Silicon Valley.

## Task
My task was to build a simple API (using episodes of Silicon Valley as the dataset) and a frontend to call that API and present the data.

I started by [producing a digram](https://github.com/benfurber/SiliconValleyAPI/blob/master/docs/workflow.png) of how I expected I needed the platform to work.

After installing/setting up a basic Express server, I started building the data model. I considered and investigated different ways of storing the JSON file I was provided, this included a look and play with Redis. As how to choose to store the data didn't seem central to the task I decided not to use any database and just parse the file on memory as and when required by the other objects.

As I kept most of the data complexity in the dataStore object, I built a simple object that injects a dataStore (defaulted to the one I built).

I then built the server file and route that calls the film model. Later on when building the frontend I had issues with cross origin access control so also within the route is the necessary Express code to allow one port on the same (localhost) server to call it.

Then onto the frontend. While I did research Vue.js, I wasn't convinced I'd be able to get my head around it quickly enough considering the suggested four hour timeframe for the project and thus choose to use React as I'm already familiar with it as a framework.

I decided to use Semantic UI for basic grid/responsive layout configuration.

**Task to do list:**
- [x] Github repo
- [x] Create Express app
- [x] App stores provided dataset
- [x] App serves dataset to frontend
- [x] App allows filtering by season
- [x] Create web app
- [x] Web app makes API requests to the backend
- [x] Web app displays episodes as thumbnail and title
- [x] Web app text box can filter by title
- [x] Unit test as appropriate
- [x] [Provide views on code snippet](https://github.com/benfurber/SiliconValleyAPI/blob/master/docs/codesnippet.md)

## Installation

1. Download the repo:
```sh
> git clone https://github.com/benfurber/SiliconValleyAPI/
```

2. Setup and run the backend
```sh
> cd SiliconValleyAPI/backend
> yarn install
> yarn start
```

3. Setup and run the frontend
```sh
(In a second terminal)
> cd <PATH to SiliconValleyAPI>
> cd frontend
> yarn install
> yarn start
```

## Built With

* [Node.js](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/) - Dependency Management
* [Jest](http://jestjs.io/) - Testing framework
* [Express](https://expressjs.com/) - Backend server
* [React](https://reactjs.org/) - Frontend framework
* [Semantic UI](https://react.semantic-ui.com/) - Design Framework
