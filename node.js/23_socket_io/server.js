const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')
const { Socket } = require('dgram')

const app = express()
const PORT = 8000

//http서버
const server = http.createServer(app)
//socket서버
const io = SocketIO(server)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('client');
});

app.get('/p1', (req, res) => {
    res.render('practice1');
});

app.get('/p2', (req, res) => {
    res.render('practice2');
})

app.get('/chat', (req, res) => {
    res.render('chat');
})

//이벤트 생성
io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);
    socket.on('join', (res) => {
        //채팅방을 생성하는 방법은 join(방아이디) 사용. 방이 존재하면 그 방으로 접속
        socket.join(res);
        //res=prompt에 넣은 이름 
        socket.room = res;
        console.log('조인 후', socket.rooms);
        //broadcast는 나를 제외한 전체 사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다')
        console.log(socket);
        const roomInfo = io.sockets.adapter.rooms.get(res)?.size;
        console.log(roomInfo);
    });

    socket.on('message', (res) => {
        //io.to(특정방아이디).emit(이벤트)  특정방의 전체 사용자에게 메세지 전달
        io.to(socket.room).emit("chat", res);
    });
    socket.on('leave', () => {
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size;
        console.log(roomInfo);
    });


    // socket.on('hello', (data) => {
    //     console.log(`${data.name} : ${data.message}`)
    //     socket.emit('cbHello', { name: "server", message: "안녕하세요"})
    // });



    // //이벤트 기다리는 중 
    // socket.on('open_message', (arg, cb) => {
    //     console.log(arg);  //arg=name,message객체
    //     cb(arg); //콜백으로 받은 값을 서버로 보내줌 
    // });

    // socket.on('form_message', (arg) => {
    //     console.log(arg)
    //     //다시 서버로 보내줌
    //     socket.emit("backend_message", arg)
    // })
})

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})