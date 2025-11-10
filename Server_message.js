document.getElementById("Server_Message").addEventListener("click", async () => {

    const server_message = await fetch("https://flask-backend-0htc.onrender.com");


    const server_message_js = await server_message.json()            //异步会等待完成再执行下一个
    alert(server_message_js.message)


})