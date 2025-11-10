document.getElementById("Server_Message").addEventListener("click", async () => {
    const server_message = await fetch("http://127.0.0.1:5000/");      //异步会等待完成再执行下一个
    const server_message_js = await server_message.json()
    alert(server_message_js.message)


})