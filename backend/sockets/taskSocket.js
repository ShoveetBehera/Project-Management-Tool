// backend/sockets/taskSocket.js
const taskSocket = (server) => {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log(`New WebSocket connection: ${socket.id}`);

        socket.on('taskUpdated', (task) => {
            socket.broadcast.emit('taskUpdated', task); // Notify all clients
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};

module.exports = taskSocket;