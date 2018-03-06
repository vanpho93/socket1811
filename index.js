const express = require('express');
const reload = require('reload');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

server.listen(3000, () => console.log('Server started!'));
reload(app);

io.on('connection', socket => {
	socket.on('SERVER_SEND_MESSAGE', data => console.log(data));
});
