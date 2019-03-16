const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')
  
  socket.on('codeFromEditor', (data) => {
    console.log('Code received from editor', data)
    io.sockets.emit('updateCode', data)
  })

  socket.on('completedAssigment', (data) => {
    console.log('Exercise completed:', data)
    io.sockets.emit('updateCompletedAssigment', data)
  })
  
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))