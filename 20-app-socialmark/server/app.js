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

    // io üzerinde -> bir tane event gelirse ve ismi connection olursa, bir client geliyor.
    // Bu cliente ben socket diyeyim, bu bilgiyi ekrana bas.
    io.on("connection", socket => { // socket burda şuan bağlanan kişiyi, mesaj gelmişsse şuan gelen mesajı temsil ediyor.
        console.log("Helloo")
        console.log(socket.id)

        // Bağlanmış kişiye mesaj göndermek istiyorsak -> socket
        // Bütün socketteki arkadaşlara mesaj göndermek istiyorsam -> io diyeceğim.


        //!     Karşılama mesajı gönder
        socket.emit("WELCOME_MESSAGE",`Hoş geldin, ${socket.id}`);

        //?     Mesajı handle et
        socket.on("SEND_MESSAGE", (data) => {
            console.log("Mesaj Geldi : ",data);
        })


    })

})