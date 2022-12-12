# Notes App

Notes app is a sample project built with Vanilla JavaScript. I used Object Oriented Programming in this application to practice creating interactive UI with plain JS.

## Libraries Used:

- [Axios](https://axios-http.com/docs/intro)
- [DayJS](https://day.js.org/)
- [ViteJS](https://vitejs.dev/)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Excalidraw Design

This is the mock design of the application.

![excalidraw-note-image](https://github.com/dwrdvncntcvs/my-notes-vjs/blob/master/assets/excalidraw-notes-design.png?raw=true)

## Installation

- Be sure to have the latest LTS version of <i><b>[NodeJS](https://nodejs.org/)</b></i> installed.

- On this project, I used <i><b>[Yarn](https://yarnpkg.com/)</b></i> as package manager.

```bash
# To install yarn globally
npm install -g yarn
```

- Clone this project repository to your local machine.

```bash
git clone https://github.com/dwrdvncntcvs/my-notes-vjs.git

```
- Create new file in the project root directory named `db.json`.
```json
//db.json
{
    "notes": []
}

```

- Run these commands.

```bash

# To install all the dependencies used in this project
yarn

# To run the application
yarn dev

# To run the application's json-server
yarn server

```
