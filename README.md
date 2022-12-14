# Notes App

<b><i>Notes app</i></b> is a simple project built with Vanilla JavaScript. I used Object Oriented Programming in this application to practice creating interactive UI with plain JS. This application was created to help me practice myself writing Vanilla Javascript code as I'm used to using framework when working with client side applications.

This application includes creating notes that will be saved in JSON format with the help of json-server library. The application also displays all the list of notes that the user has created. Every notes can be updated and deleted. The update and delete a note, the user should grab the note that he/she wants to delete or update then drop it to the delete or update area within the page.

## Libraries Used:

- [Axios](https://axios-http.com/docs/intro)
- [DayJS](https://day.js.org/)
- [ViteJS](https://vitejs.dev/)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Excalidraw Design

This is the mock design of the application that shows how every components is layed out within the page. Also it includes the structure of the components as well as the details on how the application will be created.

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
{
  "notes": []
}
```

- Run these commands based on its order.

```bash
# To install all the dependencies used in this project
yarn

# To run the application's json-server
yarn server

# To run the application
yarn dev
```
