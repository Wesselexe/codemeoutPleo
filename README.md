# codeMeOut

A multiplayer game where two players work together to write a piece of code. Communication is key to complete the exercise.
The "app" is built with React and node.js. Socket.io is used to communicate between the 2 users.

## Getting Started

Start by cloning/downloading the repository.

### Prerequisites

What you need to install the app.

```
Node.js for the "back-end".

NPM or yarn to run the "front-end"
```

### Installing

Start by cloning/downloading the repository, fx:
```
git clone https://github.com/Wesselexe/codemeoutPleo.git
```

Next install the dependencies at root, server & src:
```
npm install

cd server
npm install

cd src
npm install
```

Next start the server.js:
```
cd server
node server.js
```

You should see
```
Listening on port 4001
```

Next open a new terminal and start the front-end:
```
cd src
npm start
```

The app should now start on localhost:3000

```
Check src/socket.js to add your local ip address to play locally on your network
```