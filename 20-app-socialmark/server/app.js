const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 8085

const server = http.createServer(app) // sunucu yapma.

const io = socketio(server, {
    cors:{
        origin : "*",
        methods : ["GET","POST","OPTIONS"]
    }
})

server.listen(PORT, () => {

    io.on("connection", socket => { // socket burda şuan bağlanan kişiyi, mesaj gelmişsse şuan gelen mesajı temsil ediyor.

    // Bağlanmış kişiye mesaj göndermek istiyorsak -> socket
    // Bütün socketteki arkadaşlara mesaj göndermek istiyorsam -> io diyeceğim.

    //!     Karşılama mesajı gönder
    socket.emit("WELCOME_MESSAGE",`Hoş geldin, ${socket.id}`);


    //?     NEW_BOOKMARK_EVENT handle et
    socket.on("NEW_BOOKMARK_EVENT", (bookmark) => {

        //! Ekleneneni, Gönderen hariç tüm herkese bilgiyi yolla.
        socket.broadcast.emit("NEW_BOOKMARK_ADDED",bookmark)

    })
    })

})